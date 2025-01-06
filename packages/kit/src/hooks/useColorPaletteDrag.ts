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

  const draggle = (e: MouseEvent | Touch) => {
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
    window.removeEventListener('touchend', dragEnd)
    window.removeEventListener('contextmenu', dragEnd)
  }

  const dragStart = (e: MouseEvent | TouchEvent) => {
    if (disabled()) {
      return
    }
    isDraggle.value = true
    if (e instanceof TouchEvent) {
      draggle(e.touches[0])
    } else {
      draggle(e)
    }
    window.addEventListener('mousemove', mousemove)
    window.addEventListener('mouseup', dragEnd)
    window.addEventListener('touchend', dragEnd)
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

  const touchmove = (e: TouchEvent) => {
    e.preventDefault()
    if (e.touches.length) {
      draggle(e.touches[0])
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
    touchmove,
    containerRef,
  }
}
