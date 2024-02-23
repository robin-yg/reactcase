import { familyData } from './data';

function AverageShoeSize() {
    const calculateAverageShoeSize = (gender: string) => {
        const filteredData = familyData.filter(person => person.Gender === gender);

        if (filteredData.length === 0) {
            return 0;
        }

        const totalShoeSize = filteredData.reduce((sum, person) => sum + person.ShoeSize, 0);
        const averageShoeSize = totalShoeSize / filteredData.length;

        return averageShoeSize;

    };

    return (
        <div>
            <p><b>Average Shoe for Males: </b>{calculateAverageShoeSize("M").toFixed(2)}</p>
            <p><b>Average Shoe for Females: </b> {calculateAverageShoeSize("F").toFixed(2)}</p>
        </div>
    );
}

export default AverageShoeSize;