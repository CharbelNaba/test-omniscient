<template>
  <div style="width: 100%; height: 100%">
    <p>Cognitive Test</p>
    <div class="upper-left">
      <button name="upper-l" type="button" style="background-color:#264653" value="#264653" @click="fillArray('#264653')"></button>
    </div>
    <div class="upper-right">
      <button name="upper-r" type="button" style="background-color:#2a9d8f" value="#2a9d8f" @click="fillArray('#2a9d8f')"></button>
    </div>
    <div class="lower-right">
      <button name="lower-r" type="button" style="background-color:#e76f51" value="#e76f51" @click="fillArray('#e76f51')"></button>
    </div>
    <div class="lower-left">
      <button name="lower-l" type="button" style="background-color:#f4a261" value="#f4a261" @click="fillArray('#f4a261')"></button>
    </div>
    <div class="game--container">
      <div data-cell-index="0" class="cell" @click="removeColor(array[0])" :style="{'background-color':array[0]!=0?array[0]:`white`}"></div>
      <div data-cell-index="1" class="cell" @click="removeColor(array[1])" :style="{'background-color':array[1]!=0?array[1]:`white`}"></div>
      <div data-cell-index="2" class="cell" @click="removeColor(array[2])" :style="{'background-color':array[2]!=0?array[2]:`white`}"></div>
      <div data-cell-index="3" class="cell" @click="removeColor(array[3])" :style="{'background-color':array[3]!=0?array[3]:`white`}"></div>
      <div data-cell-index="4" class="cell" @click="removeColor(array[4])" :style="{'background-color':array[4]!=0?array[4]:`white`}"></div>
      <div data-cell-index="5" class="cell" @click="removeColor(array[5])" :style="{'background-color':array[5]!=0?array[5]:`white`}"></div>
      <div data-cell-index="6" class="cell" @click="removeColor(array[6])" :style="{'background-color':array[6]!=0?array[6]:`white`}"></div>
      <div data-cell-index="7" class="cell" @click="removeColor(array[7])" :style="{'background-color':array[7]!=0?array[7]:`white`}"></div>
      <div data-cell-index="8" class="cell" @click="removeColor(array[8])" :style="{'background-color':array[8]!=0?array[8]:`white`}"></div>
      <div data-cell-index="9" class="cell" @click="removeColor(array[9])" :style="{'background-color':array[9]!=0?array[9]:`white`}" style="grid-column: 2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CognitiveTest",
  data() {
    return {
      array: []
    }
  },
  methods:{
    fillArray(value){
      this.array.unshift(value)
      if(this.array.length>10){
        this.array.pop()
      }
    },
    removeColor(color){
      this.array = this.array.filter(i => i !== color);
      return this;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game--container {
    display: grid;
    grid-template-columns: repeat(3, auto);
    position: absolute;
    width: 300px;
    height: 200px;
    z-index: 15;
    top: 50%;
    left: 50%;
    margin: -100px 0 0 -150px;
}

.cell {
    width: 100px;
    height: 100px;
    border: 2px solid black;
    cursor: pointer;
    line-height: 100px;
    font-size: 60px;
}
p{
  text-align: center;
  font-size: 50px;
  position: relative;
}

@media screen and (max-width: 540px) {
    p {
        margin-top: 40%;
    }
}

button{
  width: 60px;
  height: 60px;
  border-radius: 10px;
}

.upper-left {
  position: absolute;
  top: 0px;
  left: 0px;
}
.upper-right {
  position: absolute;
  top: 0px;
  right: 0px;
}
.lower-right {
  position: absolute;
  bottom: 0px;
  right: 0px;
}
.lower-left {
  position: absolute;
  bottom: 0px;
  left: 0px;
}
</style>
