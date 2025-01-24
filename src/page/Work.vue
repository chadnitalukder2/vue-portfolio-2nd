<script setup>

</script>

<template>
    <div class="works_section">
        <div class="section_title">
            <h1>My <span>Projects</span> </h1>
        </div>

        <div class="portpoli-massonary">
            <div class="items">
                <a href="#">
                    <div class="hidden">
                    </div>
                    <img src="../assets/img/portfolioOne.png">
                    <div class="info">
                        <p>Graphic Design</p>
                        <h3>The best way to impress your web</h3>
                    </div>
                </a>


            </div>
            <div class="items">
                <a href="#">
                <div class="hidden">
                </div>
                <img src="../assets/img/portfolioOne.png">
                <div class="info">
                    <p>Graphic Design</p>
                    <h3>The best way to impress your web</h3>
                </div>
            </a>
            </div>
            <div class="items">
                <a href="#">
                <div class="hidden">
                </div>
                <img src="../assets/img/portfolioOne.png">
                <div class="info">
                    <p>Graphic Design</p>
                    <h3>The best way to impress your web</h3>
                </div>
            </a>
            </div>
            <div class="items">
                <div class="hidden">
                </div>
                <img src="../assets/img/portfolioOne.png">
                <div class="info">
                    <p>Graphic Design</p>
                    <h3>The best way to impress your web</h3>
                </div>
            </div>
            <div class="items">
                <div class="hidden">
                </div>
                <img src="../assets/img/portfolioOne.png">
                <div class="info">
                    <p>Graphic Design</p>
                    <h3>The best way to impress your web</h3>
                </div>
            </div>
            <div class="items">
                <div class="hidden">
                </div>
                <img src="../assets/img/portfolioOne.png">
                <div class="info">
                    <p>Graphic Design</p>
                    <h3>The best way to impress your web</h3>
                </div>
            </div>
            <div class="items">
                <div class="hidden">
                </div>
                <img src="../assets/img/portfolioOne.png">
                <div class="info">
                    <p>Graphic Design</p>
                    <h3>The best way to impress your web</h3>
                </div>
            </div>
            <div class="items">
                <div class="hidden">
                </div>
                <img src="../assets/img/portfolioOne.png">
                <div class="info">
                    <p>Graphic Design</p>
                    <h3>The best way to impress your web</h3>
                </div>
            </div>
            <div class="items ">
                <div class="hidden">
                </div>
                <img src="../assets/img/portfolioOne.png">
                <div class="info">
                    <p>Graphic Design</p>
                    <h3>The best way to impress your web</h3>
                </div>
            </div>



        </div>


    </div>
</template>

<style lang="scss" scoped>
.works_section {
    padding: 50px 100px;
    @media (max-width: 1059px) {
        padding: 50px 20px;
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
}

.portpoli-massonary {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 24px;
    text-align: center;

    @media only screen and (max-width: 992px) {
        grid-template-columns: 1fr 1fr;
    }

    @media only screen and (max-width: 576px) {
        grid-template-columns: 1fr;
    }

    .items {
        position: relative;
        overflow: hidden;
        border-radius: 6px;

        img {
            width: 100%;
            height: 340px;
        }

        p {
            font-size: 16px;
            font-weight: 400;
            line-height: 1.7em;
            color: var(--vt-c-white);
            text-align: start;
        }

        h3 {
            font-size: 21px;
            font-weight: 600px;
            line-height: 1.3em;
            color: var(--vt-c-white);
            text-align: start;
        }

        .info {
            background: var(--vt-c-black);

            width: 70%;
            margin: 0 auto;
            border-radius: 10px;
            padding: 20px;
            position: absolute;
            transform: translate(22%, 10%);
            visibility: hidden;
            transition: all 0.5s;
        }

        .hidden {
            height: 0;
            transition: all 0.5s;
            background: #070b1093;
            height: 99%;
            position: absolute;
            width: 100%;
            top: -350px;
        }

        &:hover {
            .info {
                visibility: visible;
                transform: translate(22%, -150%);
            }

            .hidden {
                top: 0;
            }
        }
    }

}
</style>