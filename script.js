document.addEventListener('DOMContentLoaded', function() {
    
    const data_string = `Month	Comments
2006-10	61
2006-11	0
2006-12	1
2007-01	0
2007-02	1549
2007-03	6305
2007-04	10335
2007-05	7516
2007-06	6029
2007-07	6406
2007-08	10839
2007-09	12367
2007-10	13450
2007-11	10188
2007-12	8743
2008-01	13388
2008-02	18729
2008-03	24844
2008-04	26185
2008-05	27473
2008-06	26882
2008-07	30933
2008-08	27907
2008-09	28543
2008-10	29877
2008-11	30703
2008-12	34732
2009-01	44156
2009-02	38229
2009-03	42169
2009-04	46375
2009-05	47223
2009-06	46439
2009-07	53621
2009-08	61091
2009-09	56896
2009-10	60053
2009-11	54087
2009-12	56111
2010-01	66006
2010-02	66277
2010-03	75301
2010-04	76302
2010-05	83920
2010-06	82606
2010-07	87716
2010-08	86720
2010-09	93926
2010-10	108966
2010-11	101133
2010-12	100476
2011-01	106375
2011-02	109055
2011-03	120009
2011-04	107053
2011-05	102976
2011-06	110465
2011-07	113250
2011-08	117579
2011-09	110578
2011-10	120287
2011-11	117525
2011-12	114255
2012-01	122817
2012-02	113982
2012-03	130853
2012-04	129796
2012-05	138612
2012-06	131651
2012-07	136775
2012-08	141543
2012-09	132396
2012-10	130654
2012-11	130223
2012-12	134650
2013-01	156450
2013-02	153052
2013-03	168319
2013-04	164190
2013-05	165546
2013-06	164905
2013-07	169158
2013-08	170482
2013-09	164298
2013-10	176792
2013-11	173782
2013-12	167490
2014-01	165795
2014-02	161693
2014-03	182307
2014-04	171256
2014-05	149632
2014-06	139672
2014-07	147693
2014-08	132756
2014-09	140772
2014-10	149171
2014-11	136640
2014-12	142381
2015-01	154908
2015-02	145473
2015-03	173741
2015-04	166685
2015-05	166419
2015-06	171386
2015-07	174975
2015-08	163999
2015-09	157992
2015-10	175907
2015-11	167678
2015-12	167146
2016-01	187635
2016-02	190820
2016-03	201579
2016-04	202492
2016-05	206812
2016-06	201420
2016-07	186479
2016-08	202658
2016-09	213477
2016-10	226019
2016-11	233537
2016-12	217941
2017-01	242632
2017-02	222722
2017-03	249774
2017-04	224985
2017-05	222082
2017-06	217333
2017-07	222370
2017-08	248004
2017-09	229998
2017-10	221057
2017-11	222167
2017-12	222856
2018-01	234832
2018-02	209606
2018-03	237240
2018-04	237576
2018-05	237562
2018-06	231784
2018-07	224919
2018-08	230717
2018-09	219693
2018-10	241026
2018-11	223562
2018-12	223918
2019-01	252235
2019-02	226274
2019-03	262501
2019-04	253835
2019-05	272793
2019-06	255133
2019-07	258447
2019-08	269529
2019-09	271115
2019-10	294132
2019-11	257722
2019-12	252741
2020-01	281500
2020-02	246760
2020-03	289967
2020-04	293464
2020-05	336445
2020-06	321933
2020-07	319545
2020-08	321186
2020-09	308326
2020-10	310569
2020-11	304244
2020-12	338006
2021-01	384999
2021-02	314098
2021-03	356414
2021-04	346200
2021-05	348038
2021-06	345395
2021-07	327397
2021-08	352429
2021-09	337552
2021-10	348767
2021-11	337178
2021-12	354736
2022-01	402523
2022-02	349907
2022-03	366448
2022-04	346657
2022-05	355534
2022-06	363821
2022-07	359657
2022-08	369701
2022-09	372205
2022-10	372723
2022-11	394664
2022-12	391997
2023-01	401935
2023-02	372440
2023-03	418564
2023-04	372097
2023-05	378310
2023-06	398178
2023-07	406108
2023-08	394377
2023-09	375939
2023-10	371687
2023-11	387926
2023-12	347403
2024-01	382613
2024-02	345519
2024-03	332230
2024-04	328406
2024-05	323458
2024-06	299841
2024-07	283254
2024-08	288063
2024-09	275123
2024-10	309347
2024-11	272149
2024-12	277766
2025-01	331073
2025-02	319560
2025-03	327653
2025-04	310681
2025-05	295538
2025-06	281415
2025-07	322299`;

    const chartData = data_string.trim().split('\n').slice(1).map(row => {
        const [month, comments] = row.split('\t');
        const [year, monthNum] = month.split('-');
        return {
            date: new Date(year, monthNum - 1),
            value: +comments
        };
    });

    const margin = { top: 40, right: 30, bottom: 40, left: 30 };
    const chartContainer = document.getElementById('chart');
    const width = chartContainer.clientWidth - margin.left - margin.right;
    const height = chartContainer.clientHeight - margin.top - margin.bottom;

    const svg = d3.select("#chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
    
    const xScale = d3.scaleTime()
        .domain(d3.extent(chartData, d => d.date))
        .range([0, width]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(chartData, d => d.value) * 1.1])
        .range([height, 0]);

    const xAxis = d3.axisBottom(xScale).ticks(d3.timeYear.every(2)).tickSize(0).tickPadding(15);
    svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis)
        .select(".domain").remove();
    
    const gridLines = d3.axisLeft(yScale)
        .tickSize(-width)
        .tickFormat("")
        .ticks(5);
    svg.append("g")
        .attr("class", "grid-line")
        .call(gridLines)
        .select(".domain").remove();

    const gradient = svg.append("defs").append("linearGradient")
        .attr("id", "area-gradient")
        .attr("x1", "0%").attr("y1", "0%")
        .attr("x2", "0%").attr("y2", "100%");
    gradient.append("stop").attr("offset", "0%").attr("stop-color", "#FF964C").attr("stop-opacity", 0.7);
    gradient.append("stop").attr("offset", "100%").attr("stop-color", "#FFD8B2").attr("stop-opacity", 0.1);

    const area = d3.area()
        .x(d => xScale(d.date))
        .y0(height)
        .y1(d => yScale(d.value))
        .curve(d3.curveBasis);

    const line = d3.line()
        .x(d => xScale(d.date))
        .y(d => yScale(d.value))
        .curve(d3.curveBasis);

    svg.append("path")
        .datum(chartData)
        .attr("fill", "url(#area-gradient)")
        .attr("d", area)
        .attr("opacity", 0)
        .transition().duration(1500).attr("opacity", 1);
        
    const path = svg.append("path")
        .datum(chartData)
        .attr("fill", "none")
        .attr("stroke", "#FF6600")
        .attr("stroke-width", 2.5)
        .attr("d", line);
        
    const pathLength = path.node().getTotalLength();
    path.attr("stroke-dasharray", pathLength)
        .attr("stroke-dashoffset", pathLength)
        .transition()
        .duration(2000)
        .ease(d3.easeSin)
        .attr("stroke-dashoffset", 0);

    const tooltip = d3.select("body").append("div").attr("id", "tooltip");
    const tooltipLine = svg.append("line").attr("class", "tooltip-line").style("opacity", 0);
    const bisectDate = d3.bisector(d => d.date).left;

    const overlay = svg.append("rect")
        .attr("width", width)
        .attr("height", height)
        .style("fill", "none")
        .style("pointer-events", "all");

    overlay.on("mousemove", (event) => {
        const [xPos] = d3.pointer(event);
        const date = xScale.invert(xPos);

        const i = bisectDate(chartData, date, 1);
        const d0 = chartData[i - 1];
        const d1 = chartData[i];
        if (!d0 || !d1) return;
        const d = date - d0.date > d1.date - date ? d1 : d0;
        
        const snappedX = xScale(d.date);

        tooltipLine.style("opacity", 1).attr("x1", snappedX).attr("x2", snappedX).attr("y1", 0).attr("y2", height);

        tooltip.style("opacity", 0.9)
            .style("left", `${event.pageX + 20}px`)
            .style("top", `${event.pageY}px`);

        let tooltipContent = `<h3>${d3.timeFormat("%B %Y")(d.date)}</h3>`;
        tooltipContent += `
            <div class="tooltip-item">
                <div class="tooltip-label">
                    <div class="legend-color" style="background-color: #FF6600;"></div>
                    <span>Comments</span>
                </div>
                <span class="tooltip-value">${d3.format(",")(d.value)}</span>
            </div>
        `;
        tooltip.html(tooltipContent);
    })
    .on("mouseleave", () => {
        tooltip.style("opacity", 0);
        tooltipLine.style("opacity", 0);
    });
});