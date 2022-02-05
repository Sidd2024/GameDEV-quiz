#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome(){
    const rainbowTitle = chalkAnimation.rainbow('Who wants to be a Game Dev Millionare? \n');

    await sleep();

    rainbowTitle.stop();

    console.log(`${chalk.blueBright('Read carefully it will play twice :)')}`);
    await sleep();
    const instructions = chalkAnimation.radar(`I am a process on your machine.If you get any questions wrong I will be KILLED! So get all the questions right...`);
    
    for(let i = 0; i < 8; i++){
        await sleep();
    }
    instructions.stop();
}

await welcome();

async function askName(){
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: "input",
        message: "what we should call you?",
        default(){
            return "NOOB";
        },
    });
    
    playerName = answers.player_name;
}

await askName();

async function question1(){
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'Which is the best for realistic graphics?',
        choices: [
            'Unity 3d',
            'GameMaker',
            'Unreal Engine',
            'Blender',
        ],
    });

    return handleAnswer(answers.question_1 === 'Unreal Engine');
}

await question1();

async function question2(){
    const answers = await inquirer.prompt({
        name: 'question_2',
        type: 'list',
        message: 'Which is the best language to learn for Game Development?',
        choices: [
            'Java',
            'C++',
            'Python',
            'Javascript',
        ],
    });

    return handleAnswer(answers.question_2 === 'C++');
}

await question2();

async function question3(){
    const answers = await inquirer.prompt({
        name: 'question_3',
        type: 'list',
        message: 'Which was the first video game of the world',
        choices: [
            'Tennis for Two',
            'Spacewar',
            'Tank',
            'OXO',
        ],
    });

    return handleAnswer(answers.question_3 === 'OXO');
}

await question3();

async function question4(){
    const answers = await inquirer.prompt({
        name: 'question_4',
        type: 'list',
        message: 'A game storyboard is an outline showing how a game will develop or play out?',
        choices: [
            'True',
            'False',
        ],
    });

    return handleAnswer(answers.question_4 === 'True');
}

await question4();

async function question5(){
    const answers = await inquirer.prompt({
        name: 'question_5',
        type: 'list',
        message: 'A programmer needs to instruct an object in her program to move up when the up-arrow key is pressed. Which of the following mustthe programmer write to accomplish this?',
        choices: [
            'A Class',
            'An Event-handler',
            'A Parameter',
            'An Argument',
        ],
    });

    return handleAnswer(answers.question_5 === 'An Event-handler');
}

await question5();

async function question6(){
    const answers = await inquirer.prompt({
        name: 'question_6',
        type: 'list',
        message: 'Stefan has created a zombie class for his game. He would like the zombie objects to be able to speak, run, appear and disappear. Which programing term describes the actions that Stefan wants his zombie objects to be able to perform?',
        choices: [
            'Methods',
            'Properties',
            'Instances',
            'Subclasses',
        ],
    });

    return handleAnswer(answers.question_6 === 'Methods');
}

await question6();

async function question7(){
    const answers = await inquirer.prompt({
        name: 'question_7',
        type: 'list',
        message: ' Which one of the following languages can easily be embedded into a game engine?',
        choices: [
            'C',
            'Lua',
            'Objective-C',
            'Perl',
        ],
    });

    return handleAnswer(answers.question_7 === 'Lua');
}

await question7();

async function question8(){
    const answers = await inquirer.prompt({
        name: 'question_8',
        type: 'list',
        message: 'What is a Shader?',
        choices: [
            'A memory effect',
            'A way of uploading vertices to the GPU',
            'A smooth visual effect',
            'A list of renderer instructions to produce certain visual effects',
        ],
    });

    return handleAnswer(answers.question_8 === 'A list of renderer instructions to produce certain visual effects');
}

await question8();

async function question9(){
    const answers = await inquirer.prompt({
        name: 'question_9',
        type: 'list',
        message: 'What is framerate?',
        choices: [
            'The monitor refresh rate',
            'The number of frames in a game',
            'The number of times an image is rendered per second',
            'None of the above',
        ],
    });

    return SecondlastQuestion(answers.question_9 === 'The monitor refresh rate');
}

await question9();

async function question10(){
    const answers = await inquirer.prompt({
        name: 'question_10',
        type: 'list',
        message: `What was mario first profession?`,
        choices: [
            'Plumber',
            'Carpenter',
            'Blacksmith',
            'Electrician',
        ],
    });

    return lastQuestion(answers.question_10 === 'Carpenter');
}

await question10();

async function handleAnswer(isCorrect){
    const spinner = createSpinner('Checking answer...').start();
    await sleep();

    if (isCorrect){
        spinner.success({text: `Nice work ${playerName}. That's a legit answer`});
    }
    else{
        spinner.error({text:'Wrong'});
        const lost = chalkAnimation.glitch(`Game Over!, YOU LOSE ${playerName}! Better luck next time...`)
        await sleep();
        await sleep();
        lost.stop();
        process.exit(1);
    }
}

async function SecondlastQuestion(isCorrect){
    const spinner = createSpinner('Checking answer...').start();
    await sleep();

    if (isCorrect){
        spinner.success({text: `Okay ${playerName}, Now it's the last question keeping you away from winning:-`});
        const right9 = chalkAnimation.neon('1,000,000!');
        await sleep();
        await sleep();
        right9.stop();
    }
    else{
        spinner.error({text:'WRONG!'});
        const lost = chalkAnimation.glitch(`GAME OVER!, YOU LOSE ${playerName}! Better luck next time...`)
        await sleep();
        await sleep();
        lost.stop();
        process.exit(1);
    }
}

async function lastQuestion(isCorrect){
    const spinner = createSpinner('Checking answer...').start();
    await sleep();

    if (isCorrect){
        spinner.success({text: 'Absolutely CORRECT!'});
    }
    else{
        spinner.error({text: 'WRONG!'});
        const wrong9 = chalkAnimation.glitch(`GAME OVER!, you were close enough ${playerName}`);
        await sleep();
        await sleep();
        wrong9.stop();
        process.exit(1);
    }
}

function winner(){
    console.clear();
    const msg = `Congrats, ${playerName}! You've won \n $ 1 , 0 0 0 , 0 0 0`;

    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    });
}

await winner();