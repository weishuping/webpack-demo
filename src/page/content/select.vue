<template>
    <div>
        <div v-for="(item,index) in arr" class="selectFlag" @click="move(index,item.text,$event)" :key="index">
        {{item.text}} </div>
    </div>
</template>

<script>
    export default {
        props: {
            data: Array
        },
        data() {
            return {
                arr: this.data,
                viewModel: {}
            }
        },
        methods: {
            move(index,data, e) {
			//ctrl 选择
			// if(!e.ctrlKey) {
			// 	this.viewModel.selectArr = [];
			// 	$('.selected-item').removeClass('selected-item');
			// }
			// //判断数组中是否包含当前选中的，不包含添加；包含 删除
			// var pos = this.viewModel.selectArr.indexOf(data);
			// if(pos == -1) {
			// 	$(e.target).addClass('selected-item');
			// 	this.viewModel.selectArr.push(data);
			// } else {
			// 	$(e.target).removeClass('selected-item');
			// 	this.viewModel.selectArr.splice(pos,1);
			// }

			//shift选择
			// if(!e.shiftKey) {
			// 	this.viewModel.selectArr = [];
			// 	$('.selected-item').removeClass('selected-item');
			// 	//存储按下的第一个元素
			// 	$('.selectFlag').eq(index).addClass('selected-item');
			// 	this.viewModel.selectArr.push(data);
			// 	this.viewModel.first = index;
			// }
			// if(e.shiftKey) {
			// 	this.viewModel.selectArr = [];
			// 	$('.selected-item').removeClass('selected-item');
			// 	if(this.viewModel.first == undefined) {
			// 		$('.selectFlag').eq(0).addClass('selected-item');
			// 		this.viewModel.first = 0;
			// 	}
			// 	this.viewModel.currentIndex = index;
			// 	var i;
			// 	if(this.viewModel.first <= this.viewModel.currentIndex) {
			// 		for(i=this.viewModel.first;i<=this.viewModel.currentIndex;i++){
			// 			this.viewModel.selectArr.push(this.viewModel.oprateItems()[i]);
			// 			$('.selectFlag').eq(i).addClass('selected-item');
			// 		}
			// 	} else {
			// 		for(i=this.viewModel.currentIndex;i<=this.viewModel.first;i++){
			// 			this.viewModel.selectArr.push(this.viewModel.oprateItems()[i]);
			// 			$('.selectFlag').eq(i).addClass('selected-item');
			// 		}
			// 	}
			// }
			if(!e.shiftKey && !e.ctrlKey) {
				this.viewModel.selectArr = [];
				$('.selected-item').removeClass('selected-item');
				//存储按下的第一个元素
				$('.selectFlag').eq(index).addClass('selected-item');
				this.viewModel.selectArr.push(data);
				this.viewModel.first = index;
			}
			//ctrl 是要加入数组；但是有可能有重复的，所以需要筛选；
			if(e.ctrlKey){
				this.viewModel.first = index;
				var pos = this.viewModel.selectArr.indexOf(data);
				if(pos == -1) {
					$(e.target).addClass('selected-item');
					this.viewModel.selectArr.push(data);
				} else {
					$(e.target).removeClass('selected-item');
					this.viewModel.selectArr.splice(pos,1);
				}
			}
			//shift 需要在不断更新点击的指针first（普通按下；ctrl按下；shift按下之前看是否有，如果没有
			//标记首个位置为first）
			if(e.shiftKey){
				this.viewModel.selectArr = [];
				$('.selected-item').removeClass('selected-item');
				if(this.viewModel.first == undefined) {
					$('.selectFlag').eq(0).addClass('selected-item');
					this.viewModel.first = 0;
				}
				this.viewModel.currentIndex = index;
				var i;
				if(this.viewModel.first <= this.viewModel.currentIndex) {
					for(i=this.viewModel.first;i<=this.viewModel.currentIndex;i++){
						this.viewModel.selectArr.push(this.viewModel.oprateItems()[i]);
						$('.selectFlag').eq(i).addClass('selected-item');
					}
				} else {
					for(i=this.viewModel.currentIndex;i<=this.viewModel.first;i++){
						this.viewModel.selectArr.push(this.viewModel.oprateItems()[i]);
						$('.selectFlag').eq(i).addClass('selected-item');
					}
				}
			}
			console.log(this.viewModel.selectArr);
		}
        }
    }
    
</script>
<style>
    .selectFlag{
        height: 40px;
        border: 1px solid #cecece;
    }
	.selected-item {
		background: #cecece;
	}
</style>