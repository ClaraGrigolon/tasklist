/*
Componente de lista vazia
Exibido quando não há tarefas
*/
import { View, Text, StyleSheet } from "react-native";
import { MESSAGES } from "../utils/constants";
import type { ListEmptyProps } from '../types';
import { colors, spacing, typography } from "../styles/theme";

export const ListEmpty = ({ title, description} : ListEmptyProps) =>( 
    //container centralizado para estado vazio
    <View style={styles.emptyState}>
        {/* Usa titulo customizado ou pardao */}
        <Text style={styles.emptyTitle}> 
            { title || MESSAGES.EMPTY_TITLE}</Text>

        {/*Usa descricao customizada ou padrao*/ }
        <Text style={styles.emptyDescription}>
            {description || MESSAGES.EMPTY_DESCRIPTION}
        </Text>
    </View>
);

const styles.StyleSheet.create({
    emptyState: {
        alignItems: 'center',
        padding: spacing.xxxl,
    },
    emptyTitle: {
        fontsize: typography.sizes.xl,
        fontWeight: typography.weights.bold,
        marginBotton: spacing.sm,
        color: colors.text,
    }
    emptyDescription: {
        fontsize: typography.sm,
        colors: textSecondary,
        textAlign: 'center,'
    }
});