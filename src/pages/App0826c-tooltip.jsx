import React, { useEffect } from 'react'
import $ from 'jquery'
import '../css/App0826c-tooltip.css'

const App = () => {
    useEffect
        (() => {
            //has => 檢查是否有指定的名稱
            $('a:has(.ttpShow)').on('mouseover',function (e) {
                $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
                $('#ttpPanel').css({
                    top: (e.pageY + 10) + 'px',
                    left: (e.pageX + 10) + 'px'
                }).fadeIn('fast');
            }).on('mouseover',function (e) {
                $('#ttpPanel').css({
                    top: (e.pageY + 10) + 'px',
                    left: (e.pageX + 10) + 'px'
                }).on('mouseover',function () {
                    $('#ttpPanel').remove();
                })
            })
        },[])
    return (
        <>
            <div className="wrap">
                <h1>Tooltip</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur amet facilis molestias soluta? Pariatur
                    reprehenderit quisquam saepe! Unde id magni minus cumque eius ratione at non vero, aperiam explicabo
                    nostrum! Fugit, nam libero corrupti molestiae sequi quasi nobis dolores voluptatibus unde doloremque nisi
                    culpa. Soluta, distinctio fugit. Veniam saepe quae culpa vel. Nostrum ipsam ratione accusamus! Omnis aut,
                    veritatis iusto ipsa asperiores quod dolor blanditiis enim iste, error deserunt consequatur, quo rem maiores
                    voluptate nobis porro! Libero quae sunt blanditiis in dolorem dolores, velit aut eligendi debitis quo.
                    Consequatur quas <a href="#">
                        ipsum
                        <span className="ttpShow">
                            ipsum內容說明
                        </span>
                    </a> dolores enim architecto, doloremque numquam doloribus. Perferendis optio odio
                    quisquam eos. Officia minima reiciendis quas aut. Dolores magni asperiores in explicabo excepturi aperiam
                    atque itaque provident quo! Possimus amet et reprehenderit recusandae consequatur, laudantium nostrum beatae
                    dolore nisi eligendi ut deleniti, voluptatibus a consequuntur repudiandae atque magnam velit? Cumque eius
                    laborum at magnam, quam atque vel, sed omnis maiores, aliquid quaerat blanditiis dolore ducimus id rem
                    animi. Nemo, animi distinctio obcaecati eaque nihil ex libero blanditiis aperiam, fugit voluptas
                    accusantium, nesciunt provident ullam odit nisi. Culpa quo officiis ducimus, officia libero sequi atque ex
                    animi harum ea unde repellendus tempore ab doloremque labore optio illum ipsum quam minima. Maiores ab
                    laudantium numquam aperiam repudiandae exercitationem incidunt ut ex, dolor deserunt qui illo rem
                    consequatur laborum iure ullam neque? Nisi, sapiente? Esse eligendi quia error itaque nulla iure ullam nemo?
                    Maxime dolores beatae mollitia ipsa qui natus expedita reiciendis rem eius dignissimos! Odio tempora iusto
                    fugit perspiciatis, voluptate eos officiis nesciunt adipisci saepe, itaque excepturi magnam iure rem aliquid
                    molestias labore expedita voluptatem dolorem! Rem sit, enim cupiditate nisi officia magnam saepe dolor
                    maiores dicta fugiat veniam aut eaque quod vero asperiores voluptate numquam aliquam obcaecati autem
                    accusantium qui, dolorum illum ipsam dolorem! Explicabo corporis iusto doloribus esse harum nisi sint error!
                    Eligendi fugit labore quasi odit quidem quas dicta odio perspiciatis ullam dolor, architecto illum, enim id
                    consectetur quos recusandae eum quia non, iusto eveniet! Illo sit molestiae doloribus a explicabo nesciunt
                    dignissimos tempora omnis in debitis odit iure necessitatibus temporibus rem commodi, possimus at nobis
                    praesentium accusamus? Recusandae?</p>
            </div>
        </>
    )
}

export default App