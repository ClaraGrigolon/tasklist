/*
componente de mensagem de erro
exibe erros om opcao de dispensar
*/

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { ErrorMessageProps } from '../types';


function ErrorMessage( {error, onDismiss}:
ErrorMessageProps & { onDismiss?: () => void}) {
    //não renderiza nada se não houver erro
    if(!error) return null;

}