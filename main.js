AOS.init()
new Rellax(".layer-back", { speed: -4 })
new Rellax(".layer-mid", { speed: -2 })

const words = ["Upskill", "Play", "Improve"]
let index = 0
const text = document.getElementById("rotate-text")

setInterval(() => {
  index = (index + 1) % words.length
  text.textContent = words[index]
}, 2000)

gsap.registerPlugin(ScrollTrigger)

gsap.to(".h-wrapper", {
  x: () => -(document.querySelector(".h-wrapper").scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal",
    start: "top top",
    end: "+=3000",
    scrub: true,
    pin: true
  }
})

const wrapper = document.querySelector(".water-wrapper")
const turbulence = document.getElementById("turbulence")

let targetX = 0.015
let targetY = 0.015
let currentX = 0.015
let currentY = 0.015

wrapper.addEventListener("mousemove", (e) => {
  const rect = wrapper.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width
  const y = (e.clientY - rect.top) / rect.height

  targetX = 0.01 + x * 0.02
  targetY = 0.01 + y * 0.02
})

wrapper.addEventListener("mouseleave", () => {
  targetX = targetY = 0.015
})

function animate() {
  currentX += (targetX - currentX) * 0.08
  currentY += (targetY - currentY) * 0.08

  turbulence.setAttribute(
    "baseFrequency",
    `${currentX} ${currentY}`
  )

  requestAnimationFrame(animate)
}

animate()
