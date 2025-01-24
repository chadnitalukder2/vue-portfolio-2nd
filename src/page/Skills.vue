<script setup>

</script>

<template>
<div class="skills_section">
    <div class="section_title">
        <h1>My <span>Skills</span> </h1>
    </div>

   <div class="skills">
    <div class="skill">
     <img alt="Git logo" height="40" src="https://storage.googleapis.com/a1aa/image/nIoHVE3epz3bACUN3hIxbimiXaZNgRvjpJfG7DIRtozykNIUA.jpg" width="40"/>
     <p>Git</p>
    </div>
    <div class="skill">
     <img alt="Javascript logo" height="40" src="https://storage.googleapis.com/a1aa/image/MzrbiwOecNxcASfzmGyeX5WsvShDSeGdMberVltAuSJZmsBhC.jpg" width="40"/>
     <p>Javascript</p>
    </div>
    <div class="skill">
     <img alt="Sass/Scss logo" height="40" src="https://storage.googleapis.com/a1aa/image/vYsJihv9eIT4SSFgMIKVguCmPTPnOckebyv8Jxf8RzqcJbQoA.jpg" width="40"/>
     <p>Sass/Scss</p>
    </div>
    <div class="skill">
     <img alt="Nest.Js logo" height="40" src="https://storage.googleapis.com/a1aa/image/LvbTvYTmmQ4lABqX3HyB2nl95xEZ3gxiOfAEYDwSynnWyGEKA.jpg" width="40"/>
     <p>Nest.Js</p>
    </div>
    <div class="skill">
     <img alt="Storybook logo" height="40" src="https://storage.googleapis.com/a1aa/image/ylnNujVFv3opG5QS2bUJhufda9tLJeaSt3uabT4Anq2xkNIUA.jpg" width="40"/>
     <p>Storybook</p>
    </div>
    <div class="skill">
     <img alt="Nest.Js logo" height="40" src="https://storage.googleapis.com/a1aa/image/LvbTvYTmmQ4lABqX3HyB2nl95xEZ3gxiOfAEYDwSynnWyGEKA.jpg" width="40"/>
     <p>Nest.Js</p>
    </div>
    <div class="skill">
     <img alt="Git logo" height="40" src="https://storage.googleapis.com/a1aa/image/nIoHVE3epz3bACUN3hIxbimiXaZNgRvjpJfG7DIRtozykNIUA.jpg" width="40"/>
     <p>Git</p>
    </div>
    <div class="skill">
     <img alt="Storybook logo" height="40" src="https://storage.googleapis.com/a1aa/image/ylnNujVFv3opG5QS2bUJhufda9tLJeaSt3uabT4Anq2xkNIUA.jpg" width="40"/>
     <p>Storybook</p>
    </div>
    <div class="skill">
     <img alt="Socket.Io logo" height="40" src="https://storage.googleapis.com/a1aa/image/DAIZAGxtEV53BRAaMLJ5DoWDLXPTWgsWhdOEuEeGrCfwkNIUA.jpg" width="40"/>
     <p>Socket.Io</p>
    </div>
    <div class="skill">
     <img alt="Sass/Scss logo" height="40" src="https://storage.googleapis.com/a1aa/image/vYsJihv9eIT4SSFgMIKVguCmPTPnOckebyv8Jxf8RzqcJbQoA.jpg" width="40"/>
     <p>Sass/Scss</p>
    </div>
   </div>
  </div>
</template>

<style lang="scss" scoped>
 .skills_section {
            padding: 50px 100px;
        }
       .section_title{
        text-align: center;
        h1 {
            font-size: 28px;
            margin-bottom: 30px;
            color: var(--vt-c-black);
            span {
            font-weight: 700;
        }
        }
         
       } 
        .skills {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            justify-content: center;
            gap: 30px;
        }
        .skill {
            width: 120px;
            height: 120px;
            border: 2px solid var(--vt-c-black);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            transition: background-color 0.3s;
        }
        .skill img {
            width: 40px;
            height: 40px;
            margin-bottom: 10px;
        }
        .skill:hover {
            background-color: #000;
            color: #fff;
        }
        .skill:hover img {
            filter: invert(1);
        }
        @media (max-width: 600px) {
            .skill {
                width: 80px;
                height: 80px;
            }
            .skill img {
                width: 30px;
                height: 30px;
            }
        }

</style>