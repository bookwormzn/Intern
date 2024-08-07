<template>
    <header> 
        <div class="left">
            <img src="../assets/logo1.png" alt="site logosu" class="logo">
        </div>
        <div class="center">
            <div class="title">
                <h3 class="top">Inside</h3>
                <h1>"BOOKWORMZN"</h1>
                <h3 class="bottom">Mind</h3>
            </div>
        </div>
        <div class="right">
            <label for="search-bar">
                <img src="../assets/search-icon.png" class="icon" />
                <input type="text" id="search-bar" name="search-bar" placeholder="Type to search.." />
            </label>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderFirst'
}
</script>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: center;
    padding: 50px 50px 25px;

    .left {
        flex: 1;
        .logo {
            width: 75px;
        }
    }
    .center {
        h3 {
            font-size: 32px;
            font-style: italic;
            font-weight: 400;
            margin: 0;

            &.bottom {
                text-align: right;
            }
        }
        h1 {
            color: black;
            font-size: 72px;
            margin: 0;
        }
    }
    .right {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        label {
            position: relative;
            display: block;
            width: 300px;

            input {
                width: 100%;
                height: 35px;
                background-color: #FFFFFF;
                box-shadow: 2px 2px 8px 0px rgba(0,0,0,0.2);
                margin: 0;
                padding: 5px 0px 0px 35px;
                box-sizing: border-box;
                appearance: none;
                border: none;
                outline: none;
                color: black;
                font-family: "Rockwell", serif;
                font-size: 16px;

                &::placeholder {
                    color: #888888;
                }
            }
            .icon {
                position: absolute;
                width: 25px;
                margin: 5px;
            }
        }
    }
}
</style>
