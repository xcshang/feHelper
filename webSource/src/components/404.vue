<template>
  <div class="Page404">
        <Card :bordered="false">
            <p slot="title">404</p>
            <p>page not found</p>
        </Card>
    </div>
</template>

<script>
export default {
  name: "Page404"
};
</script>

<style lang="less" scoped>
.Page404{
	background:#eee;
	padding: 20px;
	text-align:center;
}
</style>
