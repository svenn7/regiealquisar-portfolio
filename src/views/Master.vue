<template>
    <Header></Header>
    <Home></Home>
    <About></About>
    <Services></Services>
    <Skills></Skills>
    <Portfolio></Portfolio>
    <Contacts></Contacts>    
</template>

<script>
import Header from "./pages/Header.vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Services from "./pages/Services.vue";
import Skills from "./pages/Skills.vue";
import Portfolio from "./pages/Portfolio.vue";
import Contacts from "./pages/Contacts.vue";

export default {
    components: {
        Header,
        Home,
        About,
        Services,
        Skills,
        Portfolio,
        Contacts
    },
    name: 'Master',
};
</script>

<style>
    
</style>