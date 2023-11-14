<template>
    <div class="col-xl-3 mb-30">
        <div class="card-box height-100-p widget-style1">
            <div class="d-flex flex-wrap align-items-center">
                <div class="progress-data">
                    <div id="chart"></div>
                </div>
                <div class="widget-data">
                    <div class="h4 mb-0">3</div>
                    <div class="weight-600 font-14">{{ name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StatisticBox",
        props: {
            name: {
                type: String,
                default: null
            }
        }
    }
</script>