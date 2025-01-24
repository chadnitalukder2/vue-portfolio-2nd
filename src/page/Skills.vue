<script setup>

</script>

<template>
    <div class="skills_section">
        <div class="section_title">
            <h1>My <span>Skills</span> </h1>
        </div>

        <div class="skills">
            <div class="skill">
                <img alt="Git logo" height="40"
                    src="https://storage.googleapis.com/a1aa/image/nIoHVE3epz3bACUN3hIxbimiXaZNgRvjpJfG7DIRtozykNIUA.jpg"
                    width="40" />
                <p>Git</p>
            </div>
            <div class="skill">
                <img alt="Javascript logo" height="40"
                    src="https://storage.googleapis.com/a1aa/image/MzrbiwOecNxcASfzmGyeX5WsvShDSeGdMberVltAuSJZmsBhC.jpg"
                    width="40" />
                <p>Javascript</p>
            </div>
            <div class="skill">
                <img alt="Sass/Scss logo" height="40"
                    src="https://storage.googleapis.com/a1aa/image/vYsJihv9eIT4SSFgMIKVguCmPTPnOckebyv8Jxf8RzqcJbQoA.jpg"
                    width="40" />
                <p>Sass/Scss</p>
            </div>
            <div class="skill">
                <img alt="Nest.Js logo" height="40"
                    src="https://storage.googleapis.com/a1aa/image/LvbTvYTmmQ4lABqX3HyB2nl95xEZ3gxiOfAEYDwSynnWyGEKA.jpg"
                    width="40" />
                <p>Nest.Js</p>
            </div>
            <div class="skill">
                <img alt="Storybook logo" height="40"
                    src="https://storage.googleapis.com/a1aa/image/ylnNujVFv3opG5QS2bUJhufda9tLJeaSt3uabT4Anq2xkNIUA.jpg"
                    width="40" />
                <p>Storybook</p>
            </div>
            <div class="skill">
                <img alt="Nest.Js logo" height="40"
                    src="https://storage.googleapis.com/a1aa/image/LvbTvYTmmQ4lABqX3HyB2nl95xEZ3gxiOfAEYDwSynnWyGEKA.jpg"
                    width="40" />
                <p>Nest.Js</p>
            </div>
            <div class="skill">
                <img alt="Git logo" height="40"
                    src="https://storage.googleapis.com/a1aa/image/nIoHVE3epz3bACUN3hIxbimiXaZNgRvjpJfG7DIRtozykNIUA.jpg"
                    width="40" />
                <p>Git</p>
            </div>
            <div class="skill">
                <img alt="Storybook logo" height="40"
                    src="https://storage.googleapis.com/a1aa/image/ylnNujVFv3opG5QS2bUJhufda9tLJeaSt3uabT4Anq2xkNIUA.jpg"
                    width="40" />
                <p>Storybook</p>
            </div>
            <div class="skill">
                <img alt="Socket.Io logo" height="40"
                    src="https://storage.googleapis.com/a1aa/image/DAIZAGxtEV53BRAaMLJ5DoWDLXPTWgsWhdOEuEeGrCfwkNIUA.jpg"
                    width="40" />
                <p>Socket.Io</p>
            </div>
            <div class="skill">
                <img alt="Sass/Scss logo" height="40"
                    src="https://storage.googleapis.com/a1aa/image/vYsJihv9eIT4SSFgMIKVguCmPTPnOckebyv8Jxf8RzqcJbQoA.jpg"
                    width="40" />
                <p>Sass/Scss</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.skills_section {
    padding: 50px 100px;

    @media (max-width: 1059px) {
        padding: 50px 20px;
    }
}

.section_title {
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
    grid-template-columns: repeat(6, 1fr);
    justify-content: center;
    gap: 20px;
  
    @media (max-width: 976px) {
        grid-template-columns: repeat(5, 1fr);
    }
    @media (max-width: 812px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 689px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 478px) {
        grid-template-columns: repeat(2, 1fr);
    }
}

.skill {
    padding: 30px 20px;
    border: 2px solid var(--vt-c-black);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: background-color 0.3s;
}

.skill img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
}

.skill:hover {
    background-color: #000;
    color: #fff;
}

.skill:hover img {
    filter: invert(1);
}


</style>