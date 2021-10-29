$(function () {

    var colors = {
        primary: $('.colors .bg-primary').css('background-color').replace('rgb', '').replace(')', '').replace('(', '').split(','),
        primaryLight: $('.colors .bg-primary-bright').css('background-color').replace('rgb', '').replace(')', '').replace('(', '').split(','),
        secondary: $('.colors .bg-secondary').css('background-color').replace('rgb', '').replace(')', '').replace('(', '').split(','),
        secondaryLight: $('.colors .bg-secondary-bright').css('background-color').replace('rgb', '').replace(')', '').replace('(', '').split(','),
        info: $('.colors .bg-info').css('background-color').replace('rgb', '').replace(')', '').replace('(', '').split(','),
        infoLight: $('.colors .bg-info-bright').css('background-color').replace('rgb', '').replace(')', '').replace('(', '').split(','),
        success: $('.colors .bg-success').css('background-color').replace('rgb', '').replace(')', '').replace('(', '').split(','),
        successLight: $('.colors .bg-success-bright').css('background-color').replace('rgb', '').replace(')', '').replace('(', '').split(','),
        danger: $('.colors .bg-danger').css('background-color').replace('rgb', '').replace(')', '').replace('(', '').split(','),
        dangerLight: $('.colors .bg-danger-bright').css('background-color').replace('rgb', '').replace(')', '').replace('(', '').split(','),
        warning: $('.colors .bg-warning').css('background-color').replace('rgb', '').replace(')', '').replace('(', '').split(','),
        warningLight: $('.colors .bg-warning-bright').css('background-color').replace('rgb', '').replace(')', '').replace('(', '').split(',')
    };

    var rgbToHex = function (rgb) {
        var hex = Number(rgb).toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };

    var fullColorHex = function (r, g, b) {
        var red = rgbToHex(r);
        var green = rgbToHex(g);
        var blue = rgbToHex(b);
        return red + green + blue;
    };

    // contributions
    var today = $('#today').val();
    var yesterday = $('#yesterday').val();
    var week = $('#this-week').val();
    var month = $('#this-month').val();

    // income
    var today_deposits = $('#today-deposits').val();
    var today_income = $('#today-income').val();
    var today_insurance = $('#today-insurance').val();
    var today_payout = $('#today-payout').val();

    var yesterday_deposits = $('#yesterday-deposits').val();
    var yesterday_income = $('#yesterday-income').val();
    var yesterday_insurance = $('#yesterday-insurance').val();
    var yesterday_payout = $('#yesterday-payout').val();

    var thisweek_deposits = $('#thisweek-deposits').val();
    var thisweek_income = $('#thisweek-income').val();
    var thisweek_insurance = $('#thisweek-insurance').val();
    var thisweek_payout = $('#thisweek-payout').val();

    var thismonth_deposits = $('#thismonth-deposits').val();
    var thismonth_income = $('#thismonth-income').val();
    var thismonth_insurance = $('#thismonth-insurance').val();
    var thismonth_payout = $('#thismonth-payout').val();

    // alert(today);

    colors.primary = '#' + fullColorHex(colors.primary[0], colors.primary[1], colors.primary[2]);
    colors.secondary = '#' + fullColorHex(colors.secondary[0], colors.secondary[1], colors.secondary[2]);
    colors.info = '#' + fullColorHex(colors.info[0], colors.info[1], colors.info[2]);
    colors.success = '#' + fullColorHex(colors.success[0], colors.success[1], colors.success[2]);
    colors.danger = '#' + fullColorHex(colors.danger[0], colors.danger[1], colors.danger[2]);
    colors.warning = '#' + fullColorHex(colors.warning[0], colors.warning[1], colors.warning[2]);

    function analytics_tab1() {
        if ($('#analytics-tab-1').length) {
            var options = {
                series: [{
                    name: 'Contributions',
                    data: [today, yesterday, week, month]
                }],
                chart: {
                    height: 280,
                    type: 'line',
                    offsetX: -20,
                    offsetY: 20,
                    width: '102%',
                    fontFamily: 'Inter',
                    toolbar: {
                        show: false,
                    }
                },
                stroke: {
                    width: 3,
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'string',
                    categories: [
                        "Today",
                        "Yesterday",
                        "This week",
                        "This month"
                    ]
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        gradientToColors: [colors.secondary],
                        shadeIntensity: 1,
                        type: 'horizontal',
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100, 100, 100]
                    },
                }
            };

            var chart = new ApexCharts(document.querySelector("#analytics-tab-1"), options);
            chart.render();
        }
    }

    analytics_tab1();

    function pesachama_income() {
        if ($('#pesachama_income_chart').length) {

            var data = [
                {
                    name: "Today",
                    data: [today_income, today_deposits, today_insurance, today_payout]
                },
                {
                    name: "Yesterday",
                    data: [yesterday_income, yesterday_deposits, yesterday_insurance, yesterday_payout]
                },
                {
                    name: "This week",
                    data: [thisweek_income, thisweek_deposits, thisweek_insurance, thisweek_payout]
                },
                {
                    name: "This month",
                    data: [thismonth_income, thismonth_deposits, thismonth_insurance, thismonth_payout]
                }
            ];

            var options = {
                chart: {
                    type: 'area',
                    fontFamily: 'Inter',
                    height: 300,
                    offsetX: -18,
                    width: '103%',
                    stacked: true,
                    events: {
                        selection: function (chart, e) {
                            // console.log(new Date(e.xaxis.min))
                        }
                    },
                    toolbar: {
                        show: false,
                    }

                },
                colors: [colors.primary, colors.secondary, colors.success, colors.warning],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    width: 1
                },
                series: data,
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: .6,
                        opacityTo: 0,
                    }
                },
                legend: {
                    show: false
                },
                xaxis: {
                    type: 'string',
                    categories: [
                        "Income",
                        "Deposit",
                        "Insurance",
                        "Payout"
                    ]
                }
            };

            var chart = new ApexCharts(
                document.querySelector("#pesachama_income_chart"),
                options
            );

            chart.render();

            /*
              // this function will generate output in this format
              // data = [
                  [timestamp, 23],
                  [timestamp, 33],
                  [timestamp, 12]
                  ...
              ]
              */
            function generateDayWiseTimeSeries(baseval, count, yrange) {
                var i = 0;
                var series = [];
                while (i < count) {
                    var x = baseval;
                    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

                    series.push([x, y]);
                    baseval += 86400000;
                    i++;
                }
                return series;
            }
        }
    }

    pesachama_income();
});
