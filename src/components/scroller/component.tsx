import React from "react";
import css from "./styles.module.css";
import { KokoroTTS } from "kokoro-js"; 
// // // //

/**
 * Component that renders buttons to scroll to the top and bottom of the page
 * Test Test Test TEst
 */
export function Scroller(props: {
    onClickScrollTop: () => void;
    onClickScrollBottom: () => void;
}) {
    return (
        <div className="grid gap-3 grid-cols-2 mt-3 w-full">
            <button
                className={css.btn}
                data-testid="scroll-to-top"
                onClick={() => props.onClickScrollTop()}
            >
                Scroll To Top
            </button>
            <button
                className={css.btn}
                data-testid="scroll-to-bottom"
                onClick={() => props.onClickScrollBottom()}
            >
                Scroll To Bottom
            </button>
        </div>
    );
}
