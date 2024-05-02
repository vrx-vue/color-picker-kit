import { onBeforeUnmount, ref } from 'vue'

export const useColorPaletteDrag = (
  props: () => [number, number],
  onChange: (e: [number, number]) => void,
  disabled: () => boolean
) => {
  const containerRef = ref<HTMLDivElement>()

  const isDraggle = ref(false)

  const precentValue = (client: number, position: number, size: number) => {
    if (!size) {
      return 0
    }
    const v = Math.max(Math.min(client - position, size), 0)
    return (v / size) * 100
  }

  const draggle = (e: MouseEvent) => {
    const rect = containerRef.value!.getBoundingClientRect()
    const left = precentValue(e.clientX, rect.x, rect.width)
    const top = 100 - precentValue(e.clientY, rect.y, rect.height)
    const color = props()
    if (color[0] !== left || color[1] !== top) {
      onChange([left, top])
    }
  }

  const dragEnd = () => {
    isDraggle.value = false
    window.removeEventListener('mousemove', mousemove)
    window.removeEventListener('mouseup', dragEnd)
    window.removeEventListener('contextmenu', dragEnd)
  }

  const dragStart = (e: MouseEvent) => {
    if (disabled()) {
      return
    }
    isDraggle.value = true
    draggle(e)
    window.addEventListener('mousemove', mousemove)
    window.addEventListener('mouseup', dragEnd)
    window.addEventListener('contextmenu', dragEnd)
  }

  const mousemove = (e: MouseEvent) => {
    e.preventDefault()
    if (e.buttons) {
      draggle(e)
      return
    }
    dragEnd()
  }

  onBeforeUnmount(() => {
    dragEnd()
  })

  return {
    dragStart,
    dragEnd,
    containerRef,
  }
}
