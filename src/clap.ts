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

            svg.style.fill = "green";
            svg.style.stroke = "green";

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

            svg.style.fill = "rgb(117, 117, 117)"; // Reset the color
            svg.style.stroke = "";
        }
    } catch (error) {
        console.error(`[Medium Auto-Clapper] Error: ${error}`);
    }
});
