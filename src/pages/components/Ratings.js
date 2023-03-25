import React from 'react';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Button, ButtonGroup, withTheme, Text } from '@rneui/themed';

const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating)
}

ratingCompleted(3.5)

const Ratings = (props) => {

    return (
        <Text>
            <Button
              title="IN"
              buttonStyle={{
                backgroundColor: 'black',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius:100,
              }}
              containerStyle={{
                width: 50,
                height: 50,
                marginHorizontal: 50,
                marginVertical: 50,
              }}
              titleStyle={{ fontWeight: 'bold' }}
            />
            <AirbnbRating
                count={5}
                reviews={["Horrível", "Ruim", "Bom", "Muito Bom", "Perfeito"]}
                defaultRating={3}
                size={20}
                onFinishRating={ratingCompleted}
            />
        </Text>
    );
};

export default Ratings;