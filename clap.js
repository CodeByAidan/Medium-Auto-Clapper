"use strict";
document.addEventListener("click", ({ target }) => {
    var _a;
    try {
        const svg = target.firstElementChild;
        if (svg === null || svg === void 0 ? void 0 : svg.getAttribute("aria-label")) {
            let counter = 1;
            let timer;
            let parent = svg;
            for (let i = 0; i < 5 && parent.parentNode; i++) {
                parent = parent.parentNode;
            }
            const clapLabelDiv = parent.querySelector("div");
            if (((_a = clapLabelDiv === null || clapLabelDiv === void 0 ? void 0 : clapLabelDiv.textContent) === null || _a === void 0 ? void 0 : _a.trim()) === "+50") {
                return;
            }
            svg.style.fill = "green";
            svg.style.stroke = "green";
            /**
             * Triggers a mouse event on the specified SVG element.
             * This function simulates a mouse event on the provided SVG element with customizable event type.
             * @param {SVGSVGElement} node - The SVG element on which the mouse event will be triggered.
             * @param {string} eventType - The type of mouse event to trigger (e.g., "click", "mousedown").
             */
            const triggerMouseEvent = (node, eventType) => {
                if (counter > 100) {
                    clearInterval(timer);
                }
                const clickEvent = new MouseEvent(eventType, {
                    bubbles: true,
                    cancelable: true,
                });
                node.dispatchEvent(clickEvent);
                counter++;
            };
            timer = setInterval(() => {
                ["mousedown", "mouseup"].forEach((eventType) => triggerMouseEvent(svg, eventType));
            }, 10);
            svg.style.fill = "rgb(117, 117, 117)"; // Reset the color
            svg.style.stroke = "";
        }
    }
    catch (error) {
        console.error(`[Medium Auto-Clapper] Error: ${error}`);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNyYy9jbGFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQWMsRUFBRSxFQUFFOztJQUM3RCxJQUFJLENBQUM7UUFDSixNQUFNLEdBQUcsR0FBSSxNQUFzQixDQUFDLGlCQUFrQyxDQUFDO1FBRXZFLElBQUksR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3JDLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLEtBQXFCLENBQUM7WUFFMUIsSUFBSSxNQUFNLEdBQVEsR0FBRyxDQUFDO1lBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNqRCxNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUM1QixDQUFDO1lBRUQsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUEsTUFBQSxZQUFZLGFBQVosWUFBWSx1QkFBWixZQUFZLENBQUUsV0FBVywwQ0FBRSxJQUFJLEVBQUUsTUFBSyxLQUFLLEVBQUUsQ0FBQztnQkFDakQsT0FBTztZQUNSLENBQUM7WUFFRCxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7WUFDekIsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1lBRTNCOzs7OztlQUtHO1lBQ0gsTUFBTSxpQkFBaUIsR0FBRyxDQUN6QixJQUFtQixFQUNuQixTQUFpQixFQUNoQixFQUFFO2dCQUNILElBQUksT0FBTyxHQUFHLEdBQUcsRUFBRSxDQUFDO29CQUNuQixhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7Z0JBRUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxVQUFVLENBQUMsU0FBUyxFQUFFO29CQUM1QyxPQUFPLEVBQUUsSUFBSTtvQkFDYixVQUFVLEVBQUUsSUFBSTtpQkFDaEIsQ0FBQyxDQUFDO2dCQUVILElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQy9CLE9BQU8sRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDO1lBRUYsS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3hCLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQzlDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FDakMsQ0FBQztZQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUVQLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLG9CQUFvQixDQUFDLENBQUMsa0JBQWtCO1lBQ3pELEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUN2QixDQUFDO0lBQ0YsQ0FBQztJQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7UUFDaEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0FBQ0YsQ0FBQyxDQUFDLENBQUMifQ==