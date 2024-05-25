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
            const triggerMouseEvent = (node, eventType) => {
                var _a;
                if (((_a = clapLabelDiv === null || clapLabelDiv === void 0 ? void 0 : clapLabelDiv.textContent) === null || _a === void 0 ? void 0 : _a.trim()) === "+50") {
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
                }
                else {
                    ["mousedown", "mouseup"].forEach((eventType) => triggerMouseEvent(svg, eventType));
                    counter++;
                }
            }, 20);
            svg.style.fill = "rgb(117, 117, 117)"; // Reset the color
            svg.style.stroke = "";
        }
    }
    catch (error) {
        console.error(`[Medium Auto-Clapper] Error: ${error}`);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNyYy9jbGFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQWMsRUFBRSxFQUFFOztJQUMxRCxJQUFJLENBQUM7UUFDRCxNQUFNLEdBQUcsR0FBSSxNQUFzQixDQUFDLGlCQUFrQyxDQUFDO1FBRXZFLElBQUksR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQzNDLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLEtBQWEsQ0FBQztZQUVULElBQUksTUFBTSxHQUFRLEdBQUcsQ0FBQztZQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDOUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDL0IsQ0FBQztZQUVELE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFBLE1BQUEsWUFBWSxhQUFaLFlBQVksdUJBQVosWUFBWSxDQUFFLFdBQVcsMENBQUUsSUFBSSxFQUFFLE1BQUssS0FBSyxFQUFFLENBQUM7Z0JBQzlDLE9BQU87WUFDWCxDQUFDO1lBRUQsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQ3pCLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztZQUUzQixNQUFNLGlCQUFpQixHQUFHLENBQ3RCLElBQW1CLEVBQ25CLFNBQWlCLEVBQ25CLEVBQUU7O2dCQUNBLElBQUksQ0FBQSxNQUFBLFlBQVksYUFBWixZQUFZLHVCQUFaLFlBQVksQ0FBRSxXQUFXLDBDQUFFLElBQUksRUFBRSxNQUFLLEtBQUssRUFBRSxDQUFDO29CQUM5QyxPQUFPO2dCQUNYLENBQUM7Z0JBRUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxVQUFVLENBQUMsU0FBUyxFQUFFO29CQUN6QyxPQUFPLEVBQUUsSUFBSTtvQkFDYixVQUFVLEVBQUUsSUFBSTtpQkFDbkIsQ0FBQyxDQUFDO2dCQUVILElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDO1lBRVgsS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3hCLElBQUksT0FBTyxHQUFHLEVBQUUsRUFBRSxDQUFDO29CQUNsQixhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7cUJBQU0sQ0FBQztvQkFDUCxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUM5QyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQ2pDLENBQUM7b0JBQ0YsT0FBTyxFQUFFLENBQUM7Z0JBQ1gsQ0FBQztZQUNGLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUVFLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLG9CQUFvQixDQUFDLENBQUMsa0JBQWtCO1lBQ3pELEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUMxQixDQUFDO0lBQ0wsQ0FBQztJQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7UUFDYixPQUFPLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9