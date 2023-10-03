'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value=value
   this.right=null
   this.left=null
}
BinarySearchTree.prototype.insert=function(value){
   if(value<this.value){
      if(this.left==null){
         this.left=new BinarySearchTree(value)
      }else{
         this.left.insert(value)
      }
   }else{
      if(this.right==null){
         this.right=new BinarySearchTree(value)
      }else{
         this.right.insert(value)
      }
   }
}
BinarySearchTree.prototype.size=function(){
   let counter=0
   if(this.value!=null){
      counter++
   }if(this.left!=null){
      counter+=this.left.size()
   }if(this.right!=null){
      counter+=this.right.size()
   }
   return counter
}
BinarySearchTree.prototype.contains=function(value){
   if(this.value==value){
      return true
   }
   if(value<this.value){
      if(this.left!=null){
         return this.left.contains(value)
      }
   }else{
   if(this.right!=null){
          return this.right.contains(value)
        }
      }
      return false
}
BinarySearchTree.prototype.depthFirstForEach=function(cb,mode){
   if(mode=="in-order" || mode==undefined){
      if(this.left && this.left.depthFirstForEach(cb,mode));
      cb(this.value);
      if(this.right && this.right.depthFirstForEach(cb,mode));
   }
   if(mode=="pre-order"){
      cb(this.value);
      if(this.left && this.left.depthFirstForEach(cb,mode));
      if(this.right && this.right.depthFirstForEach(cb,mode));
   }
   if(mode=="post-order"){
      if(this.left && this.left.depthFirstForEach(cb,mode));
      if(this.right && this.right.depthFirstForEach(cb,mode));
      cb(this.value)
   }
}
BinarySearchTree.prototype.breadthFirstForEach=function(cb,value=[]){
   if(this.left!=null)value.push(this.left);
   if(this.right!==null)value.push(this.right);
   cb(this.value)
   if(value.length>0){
      value.shift().breadthFirstForEach(cb,value)
   }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
