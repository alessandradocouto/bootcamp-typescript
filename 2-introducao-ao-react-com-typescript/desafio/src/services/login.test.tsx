import { describe, test, expect } from 'vitest';
import login from './login'

describe('login', () => {

    const mockAlert = jest.fn();
    window.alert = mockAlert;
    const mockEmail = 'alessandra';

    test('Deve exibir alert com o nome', () => {
        login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Boas vindas, ${mockEmail}!`)
    })

    test('Não deve exibir só o alert', () => {
        login(mockEmail);
        expect(mockAlert).not.toHaveBeenCalledWith('Boas vindas!')
    })
})