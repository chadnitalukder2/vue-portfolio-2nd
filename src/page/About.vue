<script setup>

</script>

<template>
    <div class="about_section">
        <div class="image-container">
            <img height="300"
                src="https://storage.googleapis.com/a1aa/image/4Cjg7XGjTObAI9AFm4aL1zwXR6Ipmv9gTXQt8CC2vg6fyHEKA.jpg"
                width="300" />
        </div>
        <div class="text-container">
            <div class="section_title">
                <h1> About<span> Me</span></h1>
            </div>

            <p class="description">
                I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js &amp;
                Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to
                life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters
                to me.
            </p>
            <p class="description">
                I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a
                developer, taking on new challenges and learning the latest technologies along the way. Now, in my early
                thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs, Tailwinds, Supabase and much more.
            </p>
            <p class="description">
                When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker,
                witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where
                I share tech-related bites and build in public, or you can follow me on GitHub.
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.about_section {
    font-family: 'Archivo Black', sans-serif;
    padding: 50px 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    width: 100%;
    @media (max-width: 1059px) {
        padding: 50px 20px;
    }
    .image-container {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            max-width: 100%;
            height: auto;
            border: 2px solid #000;
            border-radius: 6px;
        }
    }

    .text-container {
        flex: 2;
        padding-left: 20px;

        .section_title {
            h1 {
                font-size: 2em;
                margin: 0;
                color: var(--vt-c-black);

                span {
                    font-weight: 700;
                }
            }
        }


        .description {
            font-size: 16px;
            line-height: 1.5;
            margin: 10px 0;
            color: var(--vt-c-small);
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;

        .text-container {
            padding-left: 0;
        }
    }
}
</style>