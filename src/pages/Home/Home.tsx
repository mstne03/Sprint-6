import HeaderSection from '../../components/HeaderSection/HeaderSection'
import type { HomeProps } from '../../utils/Types'
import Div from '../../components/Div/Div'
import DivVariants from '../../data/DivVariants'


const Home = ({changePage}:HomeProps) => (
    <>
        <HeaderSection
            changePage={changePage}
        />

        <div className="flex justify-center items-center mt-8">
            <Div
                isClickable={DivVariants.isClickable}
                isNotHeader={DivVariants.isNotHeader}
                isInline={DivVariants.isInline}
            >
                <div 
                className="flex flex-col items-center"
                onClick={() => {changePage(1)}}
                >
                <p className="font-bold text-2xl">
                    Know more
                </p>
                <span className="text-3xl font-bold">&#x2193;</span>
                </div>
            </Div>
        </div>
    </>
)

export default Home;
