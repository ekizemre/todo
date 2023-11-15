import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 25,

    },
    title: {
        fontSize: 30,
    },
    subtitle: {
        fontSize: 20,
        marginTop: 4,
        color: "#666",
    },
    input: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#ddd",
        fontSize: 18,
        marginTop: 32,
    },
    buttonContainer: {
        backgroundColor: "lightgreen",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 6,
        alignSelf: "flex-end",
        alignItems: "center",
        marginTop: 8,

    },
    buttonText: {
        fontSize: 18,
    },

    divider: {
        height: 1,
        backgroundColor: "#ddd",
        marginVertical: 32,
    },
    taskContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: "#ddd",
        paddingVertical: 12,


    },
    taskText: {
        fontSize: 22,

    },
    taskDelete: {
        width: 25,
        height: 27,
        borderRadius: 13,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
    },
    taskDeleteText: {
        fontSize: 15,
        color: "white",
    },

});
