<template>
    <div class="main__table">
        <div class="table__title">
            {{ title }}
        </div>
        <div class="table__main">
            <table>
                <thead>
                    <tr>
                        <th>#Id</th>
                        <th>Faculty Name</th>
                        <th>Short Name</th>
                        <th>Dekany</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td class="actions">
                            <div class="update"><img src="../assets/svg/pen.svg"></div>
                            <div class="delete"><img src="../assets/svg/delete.svg"></div>
                        </td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td class="actions">
                            <div class="update"><img src="../assets/svg/pen.svg"></div>
                            <div class="delete"><img src="../assets/svg/delete.svg"></div>
                        </td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td class="actions">
                            <div class="update"><img src="../assets/svg/pen.svg"></div>
                            <div class="delete"><img src="../assets/svg/delete.svg"></div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="table__pagination">
            <div class="pagination">
                <div class="page__number">left</div>
                <div class="page__number">1</div>
                <div class="page__number">2</div>
                <div class="page__number">right</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Table",
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        }
    },
    emits: ['update:modelValue']
}
</script>