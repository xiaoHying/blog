<template>
    <div class="carousel">
        <ul class="rslides callbacks callbacks1" id="slider">
            <li id="callbacks1_s0" class="callbacks1_on" style="display: block; transition: opacity 500ms ease-in-out; float: left; position: relative; opacity: 1; z-index: 2;">
                <img src="/images/3.jpg" alt="">
                <div class="caption">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
            </li>
            <li id="callbacks1_s1" class="" style="display: list-item; transition: opacity 500ms ease-in-out; float: none; position: absolute; opacity: 0; z-index: 1;">
                <img src="/images/2.jpg" alt="">
                <div class="caption">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
            </li>
            <li id="callbacks1_s2" class="" style="display: list-item; transition: opacity 500ms ease-in-out; float: none; position: absolute; opacity: 0; z-index: 1;">
                <img src="/images/1.jpg" alt="">
                <div class="caption">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                </div>
            </li>
        </ul>
        <span class="callbacks_nav callbacks1_nav prev">Previous</span>
        <span class="callbacks_nav callbacks1_nav next">Next</span>
    </div>
</template>

<script>
    export default {
        name:"carousel",
        data(){
            return {

            }
        }
    }
</script>

<style scope lang="scss">
    .carousel{
        position: relative;
        // .prev,.next{
        //     position: relative;
        //     top:
        // }
    }   
    .rslides {
        position: relative;
        list-style: none;
        overflow: hidden;
        width: 100%;
        padding: 0;
        margin: 0;
        li {
            -webkit-backface-visibility: hidden;
            position: absolute;
            display: none;
            width: 100%;
            left: 0;
            top: 0;
        }
        li:first-child {
            position: relative;
            display: block;
            float: left;
        }
        img {
            display: block;
            height: auto;
            float: left;
            width: 100%;
            border: 0;
        }
    }
    .caption {
        width: 65%;
        position: absolute;
        bottom: 0%;
        left: 0%;
        background-color: rgba(0, 0, 0, 0.58);
        padding: 6px 10px 15px 10px;
        p {
            color: #FFF;
            line-height: 1.5em;
            font-size: 0.875em;
            text-align: center;
            margin: 1em 0 1.5em 0;
        }
    }

    .callbacks_nav {
        position: absolute;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        top: 50%;
        left: 0;
        opacity: 0.7;
        z-index: 3;
        text-indent: -9999px;
        overflow: hidden;
        text-decoration: none;
        height: 61px;
        width: 38px;
        background: transparent url("/images/themes.gif") no-repeat left top;
        margin-top: -45px;
    }

    .next {
        left: auto;
        background-position: right top;
        right: 0;
    }

    
</style>