const Preloader = () => {
    return (
        <div className='w-full h-[100vh] bg-white flex justify-center fixed right-0 z-50 left-0 top-0 bottom-0 items-center'>
            <div className="flex flex-col space-y-[5px] items-center">
                <div>
                    <img src="/images/logo.webp" className='w-[100px]' alt="Vidari Logo" />
                </div>
                <div className="loader"></div>
            </div>
        </div>
    )
}

export default Preloader