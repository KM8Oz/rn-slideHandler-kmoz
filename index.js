//
// Copyright (c) 2020 by kmoz000 . All Rights Reserved.
//
 /**
     * Function for index of search
     *
     * @props  {any} slide directions
     * @return {JSX}        Returns a component with editable props 
     */
    import React from "react";
    import {PanResponder, Dimensions, View} from 'react-native';
    export default slideHandler = props => {
        const leftAction =  props.leftswipe == undefined ? ()=>null : props.leftswipe ;
        const rightAction = props.rightswipe == undefined ? ()=>null : props.rightswipe ;
        const upAction = props.upswipe == undefined ? ()=>null : props.upswipe  ;
        const bottomAction = props.bottomswipe == undefined ? ()=>null : props.bottomswipe   ;
        const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onStartShouldSetPanResponderCapture: () => true,
        onMoveShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderMove: (e, gestureState) => {
          const screenWidth = Math.round(Dimensions.get('window').width);
          const screenHeight = Math.round(Dimensions.get('window').height);
          console.log('onPanResponderMove',  Math.round(gestureState.dx), Math.round(gestureState.dy))
      Math.round(gestureState.dx) < -0.6 * screenWidth && Math.round(gestureState.dy) < 0.2 *  Math.abs(screenHeight) ? leftAction()
      : Math.round(gestureState.dx) > 0.6 * screenWidth && Math.round(gestureState.dy) < 0.2 *  Math.abs(screenHeight) ? rightAction() : 
      Math.round(gestureState.dy) < 0.2 * Math.abs(screenWidth) && Math.round(gestureState.dy) < -0.5 * screenHeight ? upAction() :
      Math.round(gestureState.dx) < 0.2 *  Math.abs(screenWidth) && Math.round(gestureState.dy) > 0.5 * screenHeight ? bottomAction():
      null ;
        },
        // onPanResponderGrant: (evt, gestureState) => {
        //   console.info('onPanResponderGrant')
        // },
        // onPanResponderReject: evt => {
        //   console.info('onPanResponderReject')
        // },
        onPanResponderTerminationRequest: () => {
          console.log('onPanResponderTerminationRequest')
          return false
        },
        onShouldBlockNativeResponder: () => true,
      })
    return (<View {...props} {...panResponder.panHandlers}/>)
    }