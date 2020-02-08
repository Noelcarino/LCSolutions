import React from 'react';

export default class EasySolutions extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            easySolutions: [
                {
                    problems1: {
                        id: 1,
                        arrayFormat: [
                            'LC: #001 - Easy - Two Sum',
                            ' ',
                            'function twoSum(nums,target){',
                            '   var twoElements = [];',
                            '   for (var i = 0; i < nums.length; i++{',
                            '       for (var j = 0; j < nums.length; j++){',
                            '           if (i !== j) {',
                            '               if(nums[i] + nums[j] == target) {',
                            "                   twoElements.push(i);",
                            '                   twoElements.push(j);',
                            '                   return twoElements;',
                            '               }',
                            '           }',
                            '       }',
                            '   }',
                            '   return false;',
                            '}'
                        ]
                    }
                } 
            ]
        }
    }
    render(){
        return (
            <ul className="list-group bg-dark col-6 mx-auto">
                    {this.state.easySolutions[0].problems1.arrayFormat.map((line, index) => {
                        return (
                            <li key={index} className="bg-dark text-light list-group-item border-0 py-0">{line.replace(/ /g, "\u00a0")}</li>
                        )
                    })}
            </ul>
        )
    }
}