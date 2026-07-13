<script setup>
</script>

<template>
    <menu>
        <ul>
            <li><a href="/">Home</a></li>
            <li class="dropdown">
                <a href="#" class="dropdown-toggle">About <span class="arrow">&#9662;</span></a>
                <ul class="submenu">
                    <li><a href="/personal-about">Personal</a></li>
                    <li><a href="/professional-about">Professional</a></li>
                </ul>
            </li>
        </ul>
    </menu>
    <div class="sparkle-header-banner"></div>
</template>

<style scoped>
    menu {
        background-color: #240e2e;
        padding-inline-end: 40px;
        margin: 0;
        padding-top: .5em;
        padding-bottom: .5em;
    }
    menu ul {
            display: flex;
            justify-content: space-between;
            margin-left: 0;
            padding-left: 0 !important;
        }
    menu ul li {
        margin-left: 0;
        list-style-type: none;
    }

    .submenu {
        display: none;
        position: absolute;
        background-color: #240e2e;
        list-style-type: none;
        margin: 0;
    }

    .dropdown:hover .submenu {
        display: block;
    }
</style>
