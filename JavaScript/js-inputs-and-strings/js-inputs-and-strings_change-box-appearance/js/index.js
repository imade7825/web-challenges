console.clear();

const inputColor = document.querySelector("[data-js=input-color]");
const inputBorderRadius = document.querySelector('[data-js="input-radius"]');
function updateColor() {
            const h = hueSlider.value;
            const s = saturationSlider.value;
            const l = lightnessSlider.value;
            // Update value displays
            hueValue.textContent = h;
            saturationValue.textContent = s;
            lightnessValue.textContent = l;

            // Update color preview
            const hslColor = `hsl(${h}, ${s}%, ${l}%)`;
            colorPreview.style.backgroundColor = hslColor;

            // Update hex code
            const hexColor = hslToHex(h, s, l);
            colorCode.textContent = hexColor.toUpperCase();
        }

inputColor.addEventListener('input-color',updateColor);
