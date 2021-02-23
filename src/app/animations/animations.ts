import { animate, query, stagger, style, transition, trigger, state, keyframes } from '@angular/animations';

export const btnAnm = trigger('btnAnm', [
    transition('* => *', [
        query('.btnAnmClass', style({ opacity: 0, transform: 'translateX(-40px)' }), { optional: true }),

        query('.btnAnmClass', stagger('200ms', [
            animate('{{duration}} 50ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
        ]))
    ], { params: { duration: '600ms' } })
]);

export const listAnimation = trigger('listAnimation', [
    transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
            animate('1s ease-in', keyframes([
                style({ opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
                style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
            ]))
        ]), { optional: true })
    ])
]);

export const speedDialFabAnimations = [
    trigger('fabToggler', [
        state('inactive', style({
            transform: 'rotate(0deg)'
        })),
        state('active', style({
            transform: 'rotate(225deg)'
        })),
        transition('* <=> *', animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
    trigger('speedDialStagger', [
        transition('* => *', [

            query(':enter', style({ opacity: 0 }), { optional: true }),

            query(':enter', stagger('40ms',
                [
                    animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
                        keyframes(
                            [
                                style({ opacity: 0, transform: 'translateY(10px)' }),
                                style({ opacity: 1, transform: 'translateY(0)' }),
                            ]
                        )
                    )
                ]
            ), { optional: true }),

            query(':leave',
                animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
                    keyframes([
                        style({ opacity: 1 }),
                        style({ opacity: 0 }),
                    ])
                ), { optional: true }
            )

        ])
    ])
];

