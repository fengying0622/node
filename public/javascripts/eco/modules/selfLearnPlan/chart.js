var InitiateChartJS = function () {
    return {
        init: function () {
            var barChartData = {
                labels: ["10分钟之内", "10到20分钟", "20到30分钟", "30到40分钟", "40到50分钟", "50分钟以上"],
                datasets: [
                    {
                        fillColor: '#2dc3e8',
                        strokeColor: '#2dc3e8',
                        data: [1, 4, 5, 6, 3, 2],
                    }
                ],
            };
            var defaults={
                scaleLabel:"<%=value%>人",
                scaleOverride:true,
                scaleSteps:8,
                scaleStepWidth:1
            }
            new Chart(document.getElementById("bar").getContext("2d")).Bar(barChartData,defaults);
        }
    };
}();
InitiateChartJS.init();
