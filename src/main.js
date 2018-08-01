import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Triangle } from './triangle.js';

$(function(){
  $("#triangleForm").submit(function(event){
    event.preventDefault();

  });
});
