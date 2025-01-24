<script setup>

</script>

<template>
    <div class="experience_section">
        <div class="section_title">
            <h1>My <span>Experience</span> </h1>
        </div>
        <div class="experience">
            <div class="experience_heading">
                <img alt="Google logo" height="24"
                    src="https://storage.googleapis.com/a1aa/image/MvlFl7tDDNJSJNn28Lhz0bZWa844kynTu6gI1kbCyfAZjHEKA.jpg"
                    width="24" />
                <h2>
                    Lead Software Engineer at Google
                </h2>
            </div>

            <div class="date">
                Nov 2019 - Present
            </div>
            <div class="description">
                <p>
                    As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions
                    for
                    Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to
                    the
                    enhancement of search accuracy and efficiency, optimizing user experiences for millions of users
                    worldwide.
                </p>
            </div>

        </div>
        <div class="experience">
            <div class="experience_heading">
                <img alt="Youtube logo" height="24"
                    src="https://storage.googleapis.com/a1aa/image/VA0yx6Qwnr6vPBTNjkfyPkxus27Navfy0qVLvSDy6Y6xGPIUA.jpg"
                    width="24" />
                <h2 class="title">
                    Software Engineer at Youtube
                </h2>

            </div>
            <div class="date">
                Jan 2017 - Oct 2019
            </div>

            <div class="description">
                <p>
                    At Youtube, I served as a Software Engineer, focusing on the design and implementation of backend
                    systems for the social media giant's dynamic platform. Working on projects that involved large-scale
                    data processing and user engagement features, I leveraged my expertise to ensure seamless
                    functionality
                    and scalability.
                </p>
            </div>

        </div>
        <div class="experience">
            <div class="experience_heading">
                <img alt="Apple logo" height="24"
                    src="https://storage.googleapis.com/a1aa/image/UAMM2kmEd2rCNlfZeMTfiGBQf0KrkPIsPdH7Q0KLdq7Ab8gQB.jpg"
                    width="24" />
                <h2>
                    Junior Software Engineer at Apple
                </h2>
            </div>

            <div class="date">
                Jan 2016 - Dec 2017
            </div>
            <div class="description">
                <p>
                    During my tenure at Apple, I held the role of Software Architect, where I played a key role in
                    shaping
                    the architecture of mission-critical software projects. Responsible for designing scalable and
                    efficient
                    systems, I provided technical leadership to a cross-functional team.
                </p>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.experience_section {
    font-family: 'Archivo Black', sans-serif;
    padding: 50px 100px;
    background: var(--vt-c-black);

    @media (max-width: 1059px) {
        padding: 50px 20px;
    }

    .section_title {
        text-align: center;

        h1 {
            font-size: 28px;
            margin-bottom: 30px;
            color: var(--vt-c-white);

            span {
                font-weight: 700;
            }
        }
    }

    .experience {
        background-color: #292929c7;
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 25px;
        text-align: left;
        position: relative;
        border: 1px solid #cccccc5c;


        .experience_heading {
            display: flex;
            gap: 20px;

            img {
                width: 24px;
                height: 24px;
                vertical-align: middle;
                margin-right: 10px;
            }

            h2 {
                font-size: 1.2em;
                font-weight: 700;
                margin: 0;
                color: var(--vt-c-white);
            }


        }

        .date {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 0.9em;
            color: #ccc;

            @media (max-width: 594px) {
                padding-top: 10px;
                position: unset;
            }
        }

        .description {
            p {
                font-size: 0.9em;
                margin: 15px 0 0 0px;
                color: #ccccccd6;
            }

        }

    }
}
</style>