import Moon from '../assets/Moon.svg';

export default function Top() {
    return (
        <>
            <div id="top">
                <h1>Leonardo Miščević</h1>
                <button class="svg-img-button">
                    <img src={Moon} alt="Moon" />
                </button>
            </div>
            <hr className='tophr' />
        </>
    )
}