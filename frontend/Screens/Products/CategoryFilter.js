import React from "react";
import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { List, Text, Badge } from "native-base";

const CategoryFilter = (props) => {

    return (
        <ScrollView
            bounces={true}
            horizontal={true}
            style={{backgroundColor: "#f2f2f2"}}
        >
            <List.Item style={{margin: 0, padding: 0, borderRadius: 0}}>
                <TouchableOpacity
                    key={1}
                    onPress={()=>{
                        props.categoryFilter('all'), props.setActive(-1)
                    }}
                >
                    <Badge
                        style={[styles.center, {margin: 5},
                            props.active == -1 ? styles.active : styles.inactive
                        ]} //actinve inactive difference
                    >
                        <Text style={{color: 'white'}}>All</Text>
                    </Badge>
                </TouchableOpacity>
                {props.categories.map((item)=>(
                    <TouchableOpacity
                    key={item.id}
                    onPress={()=>{
                        props.categoryFilter(item.id),
                        props.setActive(props.categories.indexOf(item))
                    }}
                    >
                        <Badge
                            style={[styles.center,
                                {margin: 5},
                                props.active == props.categories.indexOf(item) ? styles.active : styles.inactive
                            ]} //actinve inactive difference
                        >
                            <Text style={{color: 'white'}}>{item.name}</Text>
                        </Badge>
                    </TouchableOpacity>
                ))}
            </List.Item>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    active: {
        backgroundColor: "#03bafc"
    },
    inactive: {
        backgroundColor: "#a0e1eb"
    }
})

export default CategoryFilter;