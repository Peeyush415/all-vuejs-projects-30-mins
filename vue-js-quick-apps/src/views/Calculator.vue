<template>
<div>
  <h1>Calculator</h1>
  <table>
    <tr>
      <td colspan="4"><input type="text" v-model="expression"></td>
    </tr>
    <tr>
      <td><button @click="addNumber('7')">7</button></td>
      <td><button @click="addNumber('8')">8</button></td>
      <td><button @click="addNumber('9')">9</button></td>
      <td><button @click="addOperator('/')">/</button></td>
    </tr>
    <tr>
      <td><button @click="addNumber('4')">4</button></td>
      <td><button @click="addNumber('5')">5</button></td>
      <td><button @click="addNumber('6')">6</button></td>
      <td><button @click="addOperator('7')">*</button></td>
    </tr>
    <tr>
      <td><button @click="addNumber('1')">1</button></td>
      <td><button @click="addNumber('2')">2</button></td>
      <td><button @click="addNumber('3')">3</button></td>
      <td><button @click="addOperator('-')">-</button></td>
    </tr>
    <tr>
      <td ><button @click="addNumber('0')">0</button></td>
      <td ><button @click="addNumber('.')">.</button></td>
      <td><button @click="evaluate()">=</button></td>
      <td><button @click="addOperator('+')">+</button></td>
    </tr>
  </table>


</div>
</template>

<script>
export default {
  name: "Calculator",
  data(){
    return{
      expression:'',
    }
  },
  methods:{
    addOperator(operator){
      this.expression +=operator;
    },
    addNumber(number){
      this.expression +=number;
    },
    evaluate(){
      this.expression=eval(this.expression).toString();
    }
  }
}
</script>

<style scoped>

</style>