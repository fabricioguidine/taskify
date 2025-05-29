import os

# Estrutura de diretórios e arquivos
structure = {
    "taskify/": [
        "package.json",
        "tsconfig.json",
        "vite.config.ts",
        "src/App.tsx",
        "src/main.tsx",
        "src/components/TaskItem.tsx",
        "src/hooks/.keep",
        "src/utils/.keep",
        "__tests__/App.test.tsx"
    ]
}

# Criar diretórios e arquivos
for root, files in structure.items():
    for file in files:
        path = os.path.join(root, file)
        os.makedirs(os.path.dirname(path), exist_ok=True)
        # Criar arquivo vazio (ou com placeholder básico)
        with open(path, "w", encoding="utf-8") as f:
            if path.endswith(".tsx"):
                f.write("import React from 'react';\n\nexport default function Component() {\n  return <div>Component</div>;\n}\n")
            elif path.endswith(".json"):
                f.write("{}\n")
            elif path.endswith(".ts"):
                f.write("// Configuração\n")
            elif "test" in path:
                f.write("import { render } from '@testing-library/react';\nimport App from '../src/App';\n\ntest('renders App', () => {\n  render(<App />);\n});\n")
            else:
                pass  # .keep ou vazio
