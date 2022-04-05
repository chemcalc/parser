import { Tokens } from './Tokens';
import { TokenType } from './TokenType';

export interface IToken {
	type: TokenType;
	value: string;
}

export class Tokenizer {
	public readonly text: string;
	private tokens: IToken[] = [];

	public constructor(t: string) {
		this.text = t;
	}

	public parse(): IToken[] {
		let inItem = true;

		for (let i = 0; i < this.text.length; i++) {
			const char = this.text[i];

			if (char === Tokens.WHITESPACE) {
				continue;
			}

			if (inItem) {
				if ([Tokens.WHITESPACE, Tokens.PLUS].some(c => char.toLowerCase().includes(c))) {
					inItem = false;
					continue;
				}

				for (var j = 0; inItem; j++) {}
			}
		}

		return this.tokens;
	}
}
