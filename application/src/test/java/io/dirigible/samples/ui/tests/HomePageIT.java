package io.dirigible.samples.ui.tests;

import io.dirigible.samples.ui.CustomStack;
import org.eclipse.dirigible.tests.framework.HtmlElementType;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class HomePageIT extends UserInterfaceIntegrationTest {

    private static final String CUSTOM_STACK_HEADER = "custom-stack";

    @Autowired
    private CustomStack customStack;

    @Test
    void testOpenHomepage() {
        customStack.openHomePage();

        browser.assertElementExistsByTypeAndText(HtmlElementType.HEADER5, CUSTOM_STACK_HEADER);
    }
}
