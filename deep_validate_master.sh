#!/bin/bash

# Xibalba Solutions: Deep Validation Master Orchestrator
echo "--- Starting Deep Validation Pipeline ---"

# 1. Functional Validation (Playwright)
echo "Step 1: Running Playwright Tests..."
# Define base directory
BASE_DIR=$(pwd)

# Run pytest directly from the environment
# We assume .venv_test exists as per original script
source .venv_test/bin/activate
pytest -v tests/test_deep_validate.py
PW_EXIT=$?

if [ $PW_EXIT -ne 0 ]; then
    echo "❌ Functional Tests Failed. Aborting Pipeline."
    exit 1
fi
echo "✅ Functional Tests Passed."

# 2. Visual Audit (LLM Review)
echo "Step 2: Running Visual Audit (LLM Review)..."
python3 scripts/visual_audit.py
VA_EXIT=$?

if [ $VA_EXIT -ne 0 ]; then
    echo "❌ Visual Audit Failed. Check reports/visual_audit_report.md"
    exit 1
fi

echo "--- Deep Validation Complete ---"
echo "Check reports/visual_audit_report.md for the manual-style LLM feedback."
