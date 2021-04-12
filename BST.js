import * as React from 'react';
import { Button, Text, View, title, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

// Node class 
class Node {
    constructor(data, descipt, gol) {
        this.name = data;
        this.description = descipt;
        this.goal = gol;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(current){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
}