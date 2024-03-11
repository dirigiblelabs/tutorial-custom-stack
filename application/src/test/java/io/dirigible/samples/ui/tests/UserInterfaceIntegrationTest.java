package io.dirigible.samples.ui.tests;

import io.dirigible.samples.ui.IntegrationTest;
import org.eclipse.dirigible.tests.framework.Browser;
import org.springframework.beans.factory.annotation.Autowired;

abstract class UserInterfaceIntegrationTest extends IntegrationTest {

    @Autowired
    protected Browser browser;

}
