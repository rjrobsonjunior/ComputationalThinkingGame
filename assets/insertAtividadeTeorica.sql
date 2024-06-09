INSERT INTO public.atividades_teoricas (
    nome, numeroquestoes, questoes, fk_curso
) VALUES (
    'atividade1', 2, '[
        {
            "question": "What command would reveal more information ONLY about the Scan function in the fmt package?",
            "options": ["go doc", "go doc fmt", "fmt", "go doc fmt.Scan"],
            "answer": "go doc fmt.Scan"
        },
        {
            "question": "Which of the following would be considered a literal in Go?",
            "options": ["13,89", "var literalVal literal", "uint16", "const litealVal = 13,89"],
            "answer": "13,89"
        }
    ]', 1
);
