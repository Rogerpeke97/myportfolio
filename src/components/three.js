import React from 'react';
import * as THREE from "three";
import {useEffect, useRef, useState} from "react";
import { Lensflare, LensflareElement } from 'three/examples/jsm/objects/Lensflare.js';
import TWEEN from '@tweenjs/tween.js'

const style = {
    portfolio_grid: {
        display: "grid",
        width: "90%",
        gridTemplateRows: "10% 90%",
        height: "90vh",
        position: "relative",
        left: "5%",
        top: "5vh",
        zIndex: "1",
    },
    moving_div_1: {
        flex: "1",
        height: "0", 
        zIndex: "0", 
        width:"25%", 
        borderBottom: "100vh solid rgba(44,12,175,1)",
        borderRight: "100vh solid transparent",  
        position: "absolute", 
        left: "-100%", 
        top: "0vh",
        opacity: "0.8"
    },
    moving_div_2: {
        flex: "1", 
        height: "0", 
        zIndex: "0", 
        width:"50%", 
        borderBottom: "100vh solid whitesmoke",
        borderRight: "100vh solid transparent",  
        position: "absolute", 
        left: "100%", 
        top: "200vh", 
        marginTop: "5rem", 
        transform: "scaleX(-1)",
        opacity: "0.8"
    },
    transparent_overlay: {
        display: "grid",
        pointerEvents: "none",
        position: "absolute",
        minWidth: "90%",
        maxWidth: "90%",
        maxHeight: "90%",
        minHeight: "90%",
        left: "5%",
        transition: "all 0.1s ease-out",
        top: "5%",
        zIndex: "2",
        backgroundColor: "grey",
        opacity: "0.5",
        boxShadow: "0 0 34px 18px grey"
    },
    my_work_title: {
        display: "grid",
        cursor: "default",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "300%",
        height: "100%",
        width: "100%"
    },
    websites: {
        display: "grid",
        gridTemplateRows: "50% 50%"
    },
    grid: {
        display: "flex",
    },
    box: {
        margin: "2%",
        width: "100%",
        border: "3px solid rgba(44,12,175,1)",
        boxShadow: "0px 0px 6px 0px white",
        borderRadius: "6px",
        flex: "1",
        transition: "transform 0.5s ease-out"
    },
    grid_images: {
        maxHeight: "100%",
        maxWidth: "100%",
    },
    canvas_2d: {
        position: "absolute",
        height: "100%",
        width: "100%",
        background: "white",
//        background: "linear-gradient(17deg, rgba(0,0,0,1) 32%, rgba(10,10,10,10) 56%, rgba(20,20,20,20) 70%)",
//        backgroundSize: "400% 400%",
        animation: "transition 45s infinite"
    }
}



function ThreeJsScene() {
    const [componentLoaded,
        setComponentLoaded] = useState(false);
    let loadingScreenMessages = useRef(0);
    let loading = useRef(0);
    const [message, setMessage] = useState("Show background");
    let moving_div_1 = useRef(0);
    let moving_div_2 = useRef(0);
    let transparent_overlay = useRef(0);
    let canvasContainer = useRef(0);
    let portfolio_grid = useRef(0);
    let underline_login = useRef(0);
    let login_font = useRef(0);
    let canvas_2d = useRef(0);
    useEffect(() => {
        if (componentLoaded === false) {
            let scene = new THREE.Scene();
            let manager = new THREE.LoadingManager(); // WHEN MODELS ARE LOADED .onLoad will be called
            let camera = new THREE.PerspectiveCamera(75, canvasContainer.current.clientWidth / canvasContainer.current.clientHeight, 0.1, 1000);
            let renderer = new THREE.WebGLRenderer();
            let height = canvasContainer.current.clientHeight;
            let width =  window.innerWidth;
            camera
                .position
                .set(-2, 0, 10);
            const color = 'white';
            const intensity = 1;
            const light2 = new THREE.DirectionalLight(color, intensity);
            light2
                .position
                .set(5, 0, 3);
            scene.add(light2);
            //LIGHT FROM PLANET
            const textureFlare = new THREE.TextureLoader(manager);
            const textureFlare0 = textureFlare.load( 'lensflare0.png' );
            const textureFlare3 = textureFlare.load( 'lensflare3.png' );
            addLight( 0.55, 0.9, 0.5, 5000, 0, - 1000 );
            addLight( 0.08, 0.8, 0.5, 0, 0, 15);
            addLight( 0.995, 0.5, 0.9, 5000, 5000, - 1000 );

            function addLight( h, s, l, x, y, z ) {

                const light = new THREE.PointLight( 0xffffff, 1.5, 1000 );
                light.color.setHSL( h, s, l );
                light.position.set( x, y, z );
                scene.add( light );

                const lensflare = new Lensflare();
                lensflare.addElement( new LensflareElement( textureFlare0, 700, 0, light.color ) );
                lensflare.addElement( new LensflareElement( textureFlare3, 60, 0.6 ) );
                lensflare.addElement( new LensflareElement( textureFlare3, 70, 0.7 ) );
                lensflare.addElement( new LensflareElement( textureFlare3, 120, 0.9 ) );
                lensflare.addElement( new LensflareElement( textureFlare3, 70, 1 ) );
                light.add( lensflare );
            }            

            const mouse = new THREE.Vector2();

            const windowHalf = new THREE.Vector2(window.innerWidth / window.innerHeight);

            const target = new THREE.Vector2();

            document.addEventListener('mousemove', onMouseMove);

            function onMouseMove(event) {
                mouse.x = (event.clientX / 8 - windowHalf.x);
                mouse.y = (event.clientY / 4 - windowHalf.y);
            }
            window.addEventListener('resize', () => {
                if (canvasContainer.current !== null) {
                    width = window.innerWidth;
                    height = document.documentElement.clientHeight;
                    renderer.setSize(width, height);
                    canvasContainer.current.style.width = width;
                    camera.aspect = width / height;
                    camera
                        .updateProjectionMatrix();
                    scroll_value = window.scrollY;
                    //CANVAS_2d
                    canvas_2d.current.width = window.innerWidth;
                    canvas_2d.current.height = window.innerHeight;
                    let particle_width = canvas_2d.current.width / 25;
                    let particle_position = -particle_width;
                    array_particles.forEach((part)=>{
                        part.x = particle_position;
                        particle_position = particle_position + particle_width;
                    })
                }
            });

            //SETTING SPHERE BACKGROUND

            scene.background = new THREE
                .CubeTextureLoader()
                .setPath('textures/')
                .load([
                    'px.jpg',
                    'nx.jpg',
                    'py.jpg',
                    'ny.jpg',
                    'pz.jpg',
                    'nz.jpg'
                ]);

            renderer.setSize(width, height);
            canvasContainer
                .current
                .appendChild(renderer.domElement);

            let sunBump = new THREE
                .TextureLoader(manager)
                .load('sunbump.png');

            let sunTexture = new THREE
                .TextureLoader(manager)
                .load('sun.jpg');
            let geometry = new THREE.SphereGeometry(1, 32, 32);
            const material = new THREE.MeshPhongMaterial({map: sunTexture, alphaTest: 0.1, bumpMap: sunBump, bumpScale: 0.005});
            let cube = new THREE.Mesh(geometry, material);

            //PARTICLES
            let particleCount = 2000
            let particleDistance = 53;
            let particles = new THREE.Geometry();
            let texture = new THREE
                .TextureLoader()
                .load('flare.png');
            let pMaterial = new THREE.PointsMaterial({
                color: 'white', size: 0.3, map: texture, alphaTest: 0.1, // removes black squares
                blending: THREE.AdditiveBlending,
                transparent: false
            });
            for (let i = 0; i < particleCount; i++) {
                let posX = (Math.random() - 0.5) * particleDistance;
                let posY = (Math.random() - 0.5) * particleDistance;
                let posZ = (Math.random() - 0.5) * particleDistance;
                let particle = new THREE.Vector3(posX, posY, posZ);
                particles
                    .vertices
                    .push(particle);
            }

            // create the particle system
            let particleSys = new THREE.Points(particles, pMaterial);
            particleSys.name = 'particleSys';
            renderer.setAnimationLoop(() => {
                let particleSys = scene.getObjectByName('particleSys');
                particleSys
                    .geometry
                    .vertices
                    .forEach(particle => {
                        particle.z += 0.1;
                        if (particle.z > 10) {
                            particle.z = -20
                        }
                        particleSys.geometry.verticesNeedUpdate = true;
                    })
                renderer.render(scene, camera)
            })
            // add it to the scene
            scene.add(cube)

            scene.add(particleSys)

            let tween = new TWEEN
                .Tween(pMaterial.color)
                .to({
                    r: 0.2,
                    g: 0,
                    b: 1
                }, 5000)
                .yoyo(true)
                .repeat(99999)
                .start()

            function animateTween(time) {
                TWEEN.update(time)
                requestAnimationFrame(animateTween)
            }
            setTimeout(() => {
                return tween = new TWEEN
                    .Tween(camera.position)
                    .to({
                        x: 2,
                        y: 0,
                        z: 3
                    }, 5000)
                    .start()
            }, 20000)

            let animate = () => {
                target.x = (0.5 - mouse.x) * 0.002;
                target.y = (0.5 - mouse.y) * 0.002;
                camera.rotation.x += 0.05 * (target.y - camera.rotation.x);
                camera.rotation.y += 0.05 * (target.x - camera.rotation.y);
                requestAnimationFrame(animate);
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                renderer.render(scene, camera);
            };
            animate();
            requestAnimationFrame(animateTween);



            //canvas_2d

            class particle_generator{
                constructor(x_pos, y_pos, radius_circle){
                    this.x = x_pos;
                    this.y = y_pos;
                    this.r = radius_circle;
                    this.arc = function(position_x, position_y, radius, start, end){
                        canvas_2d_ctx.beginPath();
                        canvas_2d_ctx.fillStyle = "rgba(255,255,255)";
                        canvas_2d_ctx.arc(position_x, position_y, radius, start, end);
                        canvas_2d_ctx.closePath();
                        canvas_2d_ctx.fill();
                    }
                }
            }

            const canvas_2d_ctx = canvas_2d.current.getContext("2d");
            canvas_2d.current.width = window.innerWidth;
            canvas_2d.current.height = window.innerHeight;
            let array_particles = [];
            let particle_width = canvas_2d.current.width / 25;
            let particle_position = -particle_width;

            for(let i = 0; i < 27; i++){
                //let particle_height = window.innerHeight / 10;
                let particle = new particle_generator(particle_position, Math.floor(Math.random() * window.innerHeight), 10);
                particle_position = particle_position + particle_width;
                array_particles.push(particle);
            }

            setInterval(()=>move_particles(),30);

            console.log(portfolio_grid.current);

            const move_particles = ()=>{
                canvas_2d_ctx.fillStyle = "black";
                canvas_2d_ctx.fillRect(0, 0, canvas_2d.current.width, canvas_2d.current.height);
                array_particles.forEach((part)=>{
                    if(part.y < 0){
                        part.y = window.innerHeight;
                    }
                    part.y = part.y - 1;
                    part.arc(part.x, part.y, part.r, 0, 2 * Math.PI)
                })
                //particle.x = particle.x - 0.001;
                //particle.arc(window.innerWidth / particle.x, window.innerHeight / particle.y, particle.r, 0, 2 * Math.PI);
                console.log("working");
            }



            //CHECK IF MODELS ARE LOADED
            manager.onProgress = () => {
                let array = [
                    "Loading Existential Buffer",
                    "Setting Universal Physical Constants",
                    "Modeling Object Components",
                    "Installing ransomware: Complete >:)",
                    "Gathering Particle Sources",
                    "I'm testing your patience",
                    "Reconfoobling energymotron...",
                    "Your left thumb points to the right and your right thumb points to the left.",
                    "I'm sorry for being so slow",
                    "Too fair to worship, too divine to love",
                    "An idea is always a generalization, and generalization is a property of thinking" +
                            ". To generalize means to think",
                ]
                loadingScreenMessages.current.innerText = array[Math.floor(Math.random() * array.length)];
            }

            //MOVE DIVS LEFT TO RIGHT
            let current_scroll_value;
            let scroll_value;
            const move_divs = (div_to_be_moved, amount, window_position)=>{
                    if(scroll_value < window.innerHeight){
                        let window_total_to_get_div_to_100 = window.innerHeight * window_position - current_scroll_value;// i get the remaining scroll values to get to a 100% i use the rule of 3
                        let value_scrolled;
                        let get_percentage_to_move_div;
                        let parse_div_position;
                        let div_position = div_to_be_moved.current.style.left;
                        if(current_scroll_value > scroll_value && parseInt(div_position.slice(0, -1)) < 0){
                            value_scrolled = current_scroll_value - scroll_value;
                            get_percentage_to_move_div = (value_scrolled * 100) / (window_total_to_get_div_to_100);
                            parse_div_position = parseInt(div_position.slice(0, -1)) + get_percentage_to_move_div;
                            if(parse_div_position > 0){
                                parse_div_position = 0;
                            }
                            div_to_be_moved.current.style.left = parse_div_position.toFixed(2) + '%';
                        }
                        else if(current_scroll_value < scroll_value && parseInt(div_position.slice(0, -1)) > -100){
                            value_scrolled = scroll_value - current_scroll_value;
                            get_percentage_to_move_div = (value_scrolled * 100) / (window_total_to_get_div_to_100 / 1.25);
                            parse_div_position = parseInt(div_position.slice(0, -1)) - get_percentage_to_move_div;
                            if(parse_div_position < amount){
                                parse_div_position = amount;
                            }
                            div_to_be_moved.current.style.left = parse_div_position.toFixed(2) + '%';    
                        }
                }
            }

            //MOVE DIVS RIGHT TO LEFT
            const move_divs_backwards = (div_to_be_moved, amount, window_position)=>{
                    if(scroll_value < window.innerHeight * 2){
                        let window_total_to_get_div_to_100 = window.innerHeight * window_position - current_scroll_value;// i get the remaining scroll values to get to a 100% i use the rule of 3
                        let value_scrolled;
                        let get_percentage_to_move_div;
                        let parse_div_position;
                        let div_position = div_to_be_moved.current.style.left;
                        if(current_scroll_value > scroll_value && parseInt(div_position.slice(0, -1)) > 0){
                            value_scrolled = current_scroll_value - scroll_value;
                            get_percentage_to_move_div = (value_scrolled * 100) / (window_total_to_get_div_to_100);
                            parse_div_position = parseInt(div_position.slice(0, -1)) - get_percentage_to_move_div;
                            if(parse_div_position < 0){
                                parse_div_position = 0;
                            }
                            div_to_be_moved.current.style.left = parse_div_position.toFixed(2) + '%';
                        }
                        else if(current_scroll_value < scroll_value && parseInt(div_position.slice(0, -1)) < 100){
                            value_scrolled = scroll_value - current_scroll_value;
                            get_percentage_to_move_div = (value_scrolled * 100) / (window_total_to_get_div_to_100 / 1.25);
                            parse_div_position = parseInt(div_position.slice(0, -1)) + get_percentage_to_move_div;
                            if(parse_div_position > amount){
                                parse_div_position = amount;
                            }
                            div_to_be_moved.current.style.left = parse_div_position.toFixed(2) + '%';    
                        }
                }
            }

            manager.onLoad = () => {
                loading.current.style.animation = 'loadingDone 2s normal ease-out';
                setTimeout(()=>{setComponentLoaded(true)}, 2000);
                scroll_value = window.scrollY;
                //SCROLL EVENT TO MOVE DIV COLOR AGREGAR WINDOW ON RESIZE Y CREAR OBJETO
                window.addEventListener('scroll', function scrolling(){
                    current_scroll_value = window.scrollY;
                    window.requestAnimationFrame(()=>{
                        move_divs(moving_div_1, -100, 2);
                        move_divs_backwards(moving_div_2, 100, 3);
                        scroll_value = current_scroll_value;                 
                    });
                });
            }
            
        }
    })



    /*function MouseMoveE(event) {
        let canvasContainer = document.getElementById('canvas')
        let mousex = (event.clientX   - ( canvasContainer.getBoundingClientRect().left / 2)) ;
        let mousey = (event.clientY  - ( canvasContainer.getBoundingClientRect().top / 2)) ;
        let x = mousex - canvasContainer.getBoundingClientRect().width / 2 ;
        let y = canvasContainer.getBoundingClientRect().height / 2 - mousey ;
        let overlay = document.getElementById('overlay');
        let overlay2 = document.getElementById('overlay2');
        let grid1_intro = document.getElementById('grid1_intro');
        let grid1_name_img = document.getElementById('grid1_name_img');
        overlay.style.transform = `perspective(700px) rotateY(${x / 100}deg) rotateX(${ y / 100}deg)`;
        overlay2.style.transform = `perspective(700px) rotateY(${x / 100}deg) rotateX(${ y / 100}deg)`;
        grid1_intro.style.transform = `perspective(700px) rotateY(${x / 100}deg) rotateX(${ y / 100}deg)`;
        grid1_name_img.style.transform = `perspective(700px) rotateY(${x / 100}deg) rotateX(${ y / 100}deg)`;
    }*/

    let mouseMove = (e)=>{
        let mousex = (e.clientX   - ( canvasContainer.current.getBoundingClientRect().left / 2)) ;
        let mousey = (e.clientY  - ( canvasContainer.current.getBoundingClientRect().top / 2)) ;
        let x = mousex - canvasContainer.current.getBoundingClientRect().width / 2 ;
        let y = canvasContainer.current.getBoundingClientRect().height / 2 - mousey ;
        transparent_overlay.current.style.transform = `perspective(700px) rotateY(${x / 100}deg) rotateX(${ y / 100}deg)`;
    }

    return (
        <div style={{maxWidth: "100%", height: "100%", position: "relative"}}>
            <div style={{display: "flex", maxWidth: "100%", minWidth: "100%", height: "5rem", background: "black", position: "fixed",
            color: "white", top: "0", zIndex: "3"
            }}>
                <div style={{justifyContent: "center", alignContent: "center", display: "grid", flex: "1"}}>
                <a href="LatestResume.pdf" style={{textDecoration: "none", fontWeight: "bold"}} download>
                        <i className="fi-swsuxl-download-wide"></i>
                        Resume</a>
                </div>
                <div style={{justifyContent: "center", alignContent: "center", display: "flex", flex: "1", alignItems: "center"}}>
                    <i className="fi-xnsuxl-house-solid" style={{fontSize: "100%"}} />
                    <div style={{width: "100%", height: "10px", background: "white"}}>
                    </div>
                    <div style={{display: "grid", borderRadius: "50%", background: "gray", width: "5%"}}>1</div>
                </div>
                <div style={{justifyContent: "center", alignContent: "center", display: "grid", flex: "1"}}>
                    <div>{message}</div> 
                </div>
            </div>
            <div
                style={{position: "relative", height: "100vh", maxWidth: "100%", minWidth: "100%", top: "0", marginTop: "5rem", marginBottom: "0"}}
                ref={canvasContainer}
                onMouseMove={(event) => {
                mouseMove(event);
            }}>
                <div ref={transparent_overlay} style={style.transparent_overlay} onMouseMove={(e)=>mouseMove(e)}></div>
            </div>

            <div className= "THEFREAKINGPAGE" style={{display: "grid", maxWidth: "100%", minHeight: "100vh", maxHeight: "100vh", position: "relative",
             zIndex: "2"
             }}>
                <canvas ref={canvas_2d} style={style.canvas_2d}>

                </canvas>
                <div style={{display: "grid", maxHeight: "100vh"}}>
                    <div ref={portfolio_grid} style={style.portfolio_grid}>
                        <div style={style.my_work_title}>
                            <div
                                onMouseEnter={()=>{
                                    login_font.current.style.color = "white";
                                    underline_login.current.style.transform = "scaleX(1)";
                                }}
                                onMouseLeave={()=>{
                                    login_font.current.style.color = "white";
                                    underline_login.current.style.transform = "scaleX(0)";   
                                }}
                            >
                                <div ref={login_font}>My work:</div>
                                <div style={{height: "2px", width: "100%", background:"white",
                                transform: "scaleX(0)", transition: "all 0.3s ease-out"}} ref={underline_login}></div>
                            </div>  
                        </div> 
                        <div style={style.websites}>
                            <div style={style.grid}>
                                <div style={style.box}
                                    onMouseEnter={(e)=>{e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.filter= "grayscale(80%)"}}
                                    onMouseLeave={(e)=>{e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.filter= "grayscale(0%)"}}
                                >
                                    <img src="javalogo.png" alt="java logo" style={style.grid_images}></img>
                                </div>
                                <div style={style.box}
                                    onMouseEnter={(e)=>{e.currentTarget.style.transform = "scale(1.05)"}}
                                    onMouseLeave={(e)=>{e.currentTarget.style.transform = "scale(1)"}}
                                ></div>
                            </div>
                            <div style={style.grid}>
                                <div style={style.box}
                                    onMouseEnter={(e)=>{e.currentTarget.style.transform = "scale(1.05)"}}
                                    onMouseLeave={(e)=>{e.currentTarget.style.transform = "scale(1)"}}
                                ></div>
                                <div style={style.box}
                                    onMouseEnter={(e)=>{e.currentTarget.style.transform = "scale(1.05)"}}
                                    onMouseLeave={(e)=>{e.currentTarget.style.transform = "scale(1)"}}
                                ></div>
                            </div>
                        </div>       
                    </div>
                    <div ref={moving_div_1} style={style.moving_div_1}></div>
                </div>
            </div>
            <div className= "page3" style={{height: "100vh", width: "100%", background: "linear-gradient(17deg, rgba(0,0,0,1) 32%, rgba(10,10,10,10) 56%, rgba(20,20,20,20) 70%)",
            backgroundSize: "400% 400%", animation: "transition 45s infinite"}}>
            <div ref={moving_div_2} style={style.moving_div_2}></div>
            </div>
            <div
                className="loadingScreen"
                style={componentLoaded
                ? {
                    display: "none"
                }
                : {
                    display: "grid"
                }}>
                <div className="LOADING" ref={loading}>
                    <div className="LOADINGCONTAINER">
                    <span>L</span>
                    <span>O</span>
                    <span>A</span>
                    <span>D</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                    </div>
                    <div className="messages" ref={loadingScreenMessages}></div>
                </div>
            </div>
        </div>
    )
}
export default ThreeJsScene;