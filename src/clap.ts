document.addEventListener("click", ({ target }: MouseEvent) => {
    try {
        const svg = (target as HTMLElement).firstElementChild as SVGSVGElement;

        if (svg?.getAttribute("aria-label")) {
			let counter = 1;
			let timer: number;

            let parent: any = svg;
            for (let i = 0; i < 5 && parent.parentNode; i++) {
                parent = parent.parentNode;
            }

            const clapLabelDiv = parent.querySelector("div");
            if (clapLabelDiv?.textContent?.trim() === "+50") {
                return;
            }

			/**
			 * Triggers a mouse event on the specified SVG element.
			 * This function simulates a mouse event on the provided SVG element with customizable event type.
			 * @param {SVGSVGElement} node - The SVG element on which the mouse event will be triggered.
			 * @param {string} eventType - The type of mouse event to trigger (e.g., "click", "mousedown").
			 */
            const triggerMouseEvent = (
                node: SVGSVGElement,
                eventType: string,
            ) => {
                if (clapLabelDiv?.textContent?.trim() === "+50") {
                    return;
                }

                const clickEvent = new MouseEvent(eventType, {
                    bubbles: true,
                    cancelable: true,
                });

                node.dispatchEvent(clickEvent);
            };

			timer = setInterval(() => {
				if (counter > 50) {
					clearInterval(timer);
				} else {
					["mousedown", "mouseup"].forEach((eventType) =>
						triggerMouseEvent(svg, eventType),
					);
					counter++;
				}
			}, 20);
        }
    } catch (error) {
        console.error(`[Medium Auto-Clapper] Error: ${error}`);
    }
});
