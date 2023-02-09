var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "30000",
        "ok": "9565",
        "ko": "20435"
    },
    "minResponseTime": {
        "total": "112",
        "ok": "112",
        "ko": "8917"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59933",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "13371",
        "ok": "18362",
        "ko": "11035"
    },
    "standardDeviation": {
        "total": "11946",
        "ok": "17454",
        "ko": "7056"
    },
    "percentiles1": {
        "total": "10000",
        "ok": "12178",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10004",
        "ok": "32540",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "44065",
        "ok": "50917",
        "ko": "10005"
    },
    "percentiles4": {
        "total": "60000",
        "ok": "57343",
        "ko": "60000"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1670,
    "percentage": 6
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 292,
    "percentage": 1
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 7603,
    "percentage": 25
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 20435,
    "percentage": 68
},
    "meanNumberOfRequestsPerSecond": {
        "total": "337.079",
        "ok": "107.472",
        "ko": "229.607"
    }
},
contents: {
"req_root-end-point-1a094": {
        type: "REQUEST",
        name: "root end point",
path: "root end point",
pathFormatted: "req_root-end-point-1a094",
stats: {
    "name": "root end point",
    "numberOfRequests": {
        "total": "30000",
        "ok": "9565",
        "ko": "20435"
    },
    "minResponseTime": {
        "total": "112",
        "ok": "112",
        "ko": "8917"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59933",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "13371",
        "ok": "18362",
        "ko": "11035"
    },
    "standardDeviation": {
        "total": "11946",
        "ok": "17454",
        "ko": "7056"
    },
    "percentiles1": {
        "total": "10000",
        "ok": "12213",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10004",
        "ok": "32538",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "44044",
        "ok": "50917",
        "ko": "10005"
    },
    "percentiles4": {
        "total": "60000",
        "ok": "57343",
        "ko": "60000"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1670,
    "percentage": 6
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 292,
    "percentage": 1
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "htmlName": "t ≥ 1200 ms",
    "count": 7603,
    "percentage": 25
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 20435,
    "percentage": 68
},
    "meanNumberOfRequestsPerSecond": {
        "total": "337.079",
        "ok": "107.472",
        "ko": "229.607"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
