export class Diet {
  constructor(
    public type: string,
    public image: string,
    public description: string,
    public kcal: number,
    public height: number,
    public allergen: string,
    public protein: number,
    public fat: number,
    public carbs: number
  ) {
  }
}
export const DIET_MENU = [
  new Diet( 'breakfast',
    'assets/images/diet/brecfast.png',
    'Anglická snídaně s hovězími klobáskami, portobello a fazolemi',
    363,
    210,
    '7,3',
    22,
    26,
    9
  ),
  new Diet('lunch',
    'assets/images/diet/lunch.png',
    'Turecké hovězí kofty s pohankou a restovanou zeleninou',
    453,
    340,
    '9,1,3,6',
    35,
    13,
    47
  ),
  new Diet('snack',
    'assets/images/diet/snack.png',
    'Salát s hovězí šunkou, grenaillemi a celerem',
    320,
    300,
    '9,7',
    15,
    16,
    27
  ),
  new Diet('dinner',
    'assets/images/diet/dinner.png',
    'Kuřecí lasagne se špenátem a krémovou omáčkou z kozího sýru',
    484,
    3230,
    '7,8,1',
    31,
    26,
    33
  )
];
